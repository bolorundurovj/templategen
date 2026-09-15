using App.Middleware;
using App.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();
app.UseMiddleware<RequestLoggingMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

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
    environment = app.Environment.EnvironmentName
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

app.Run();

public partial class Program { }
