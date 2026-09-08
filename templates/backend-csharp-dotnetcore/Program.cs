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

app.Run();

public partial class Program { }
