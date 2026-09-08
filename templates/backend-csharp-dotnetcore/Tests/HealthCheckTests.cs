using System.Net;
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

        app.MapGet("/", () => Results.Ok(new
        {
            message = "Welcome to <%= projectName %> API"
        }));

        app.MapGet("/api/health", () => Results.Ok(new
        {
            status = "ok",
            timestamp = DateTime.UtcNow
        }));

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
}
