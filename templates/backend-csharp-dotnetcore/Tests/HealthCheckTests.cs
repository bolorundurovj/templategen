using System.Net;
using System.Text;
using System.Text.Json;
using App.Middleware;
using App.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Hosting;
using Xunit;

namespace App.Tests;

public class HealthCheckTests
{
    private async Task<WebApplication> CreateTestAppAsync()
    {
        var builder = WebApplication.CreateBuilder();
        builder.WebHost.UseTestServer();

        var app = builder.Build();

        app.UseMiddleware<ExceptionMiddleware>();
        app.UseMiddleware<RequestLoggingMiddleware>();

        app.MapGet("/", () => Results.Ok(new
        {
            message = "Welcome to <%= projectName %> API"
        }));

        app.MapGet("/api/health", () => Results.Ok(new
        {
            status = "ok",
            timestamp = DateTime.UtcNow
        }));

        app.MapGet("/api/info", () => Results.Ok(new
        {
            name = "<%= projectName %>",
            version = "0.1.0",
            environment = "Testing"
        }));

        var items = new List<Item>();
        var nextId = 1;

        app.MapGet("/api/items", () => Results.Ok(new { data = items }));

        app.MapGet("/api/items/{id:int}", (int id) =>
        {
            var item = items.FirstOrDefault(i => i.Id == id);
            return item is not null
                ? Results.Ok(new { data = item })
                : Results.NotFound(new { error = "Item not found", statusCode = 404 });
        });

        app.MapPost("/api/items", (CreateItemDto dto) =>
        {
            if (string.IsNullOrWhiteSpace(dto.Title))
            {
                return Results.BadRequest(new { error = "Title is required", statusCode = 400 });
            }

            var item = new Item(
                nextId++,
                dto.Title,
                dto.Description ?? string.Empty,
                dto.Completed ?? false,
                DateTime.UtcNow,
                DateTime.UtcNow
            );
            items.Add(item);
            return Results.Created($"/api/items/{item.Id}", new { data = item });
        });

        app.MapPut("/api/items/{id:int}", (int id, UpdateItemDto dto) =>
        {
            var index = items.FindIndex(i => i.Id == id);
            if (index == -1)
            {
                return Results.NotFound(new { error = "Item not found", statusCode = 404 });
            }

            var existing = items[index];
            var updated = existing with
            {
                Title = dto.Title ?? existing.Title,
                Description = dto.Description ?? existing.Description,
                Completed = dto.Completed ?? existing.Completed,
                UpdatedAt = DateTime.UtcNow
            };
            items[index] = updated;
            return Results.Ok(new { data = updated });
        });

        app.MapDelete("/api/items/{id:int}", (int id) =>
        {
            var item = items.FirstOrDefault(i => i.Id == id);
            if (item is null)
            {
                return Results.NotFound(new { error = "Item not found", statusCode = 404 });
            }

            items.Remove(item);
            return Results.Ok(new { message = "Item deleted" });
        });

        await app.StartAsync();
        return app;
    }

    [Fact]
    public async Task RootEndpoint_ReturnsSuccessAndWelcomeMessage()
    {
        await using var app = await CreateTestAppAsync();
        var client = app.GetTestClient();
        var response = await client.GetAsync("/");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var content = await response.Content.ReadAsStringAsync();
        Assert.Contains("Welcome to", content);
    }

    [Fact]
    public async Task HealthEndpoint_ReturnsSuccessAndStatusOk()
    {
        await using var app = await CreateTestAppAsync();
        var client = app.GetTestClient();
        var response = await client.GetAsync("/api/health");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var content = await response.Content.ReadAsStringAsync();
        Assert.Contains("ok", content);
    }

    [Fact]
    public async Task InfoEndpoint_ReturnsAppMetadata()
    {
        await using var app = await CreateTestAppAsync();
        var client = app.GetTestClient();
        var response = await client.GetAsync("/api/info");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        var content = await response.Content.ReadAsStringAsync();
        Assert.Contains("0.1.0", content);
    }

    [Fact]
    public async Task Items_CrudLifecycle()
    {
        await using var app = await CreateTestAppAsync();
        var client = app.GetTestClient();

        // 1. Create
        var createPayload = new StringContent(
            JsonSerializer.Serialize(new { title = "C# Item", description = "Test" }),
            Encoding.UTF8,
            "application/json"
        );
        var createRes = await client.PostAsync("/api/items", createPayload);
        Assert.Equal(HttpStatusCode.Created, createRes.StatusCode);

        // 2. List
        var listRes = await client.GetAsync("/api/items");
        Assert.Equal(HttpStatusCode.OK, listRes.StatusCode);
        var listContent = await listRes.Content.ReadAsStringAsync();
        Assert.Contains("C# Item", listContent);

        // 3. Get
        var getRes = await client.GetAsync("/api/items/1");
        Assert.Equal(HttpStatusCode.OK, getRes.StatusCode);

        // 4. Update
        var updatePayload = new StringContent(
            JsonSerializer.Serialize(new { title = "Updated C# Item", completed = true }),
            Encoding.UTF8,
            "application/json"
        );
        var updateRes = await client.PutAsync("/api/items/1", updatePayload);
        Assert.Equal(HttpStatusCode.OK, updateRes.StatusCode);

        // 5. Delete
        var delRes = await client.DeleteAsync("/api/items/1");
        Assert.Equal(HttpStatusCode.OK, delRes.StatusCode);

        // 6. Verify 404
        var afterRes = await client.GetAsync("/api/items/1");
        Assert.Equal(HttpStatusCode.NotFound, afterRes.StatusCode);
    }
}
