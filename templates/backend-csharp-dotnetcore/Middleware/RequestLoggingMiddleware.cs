using System.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace App.Middleware;

public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<RequestLoggingMiddleware> _logger;

    public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var stopwatch = Stopwatch.StartNew();

        context.Response.OnStarting(() =>
        {
            stopwatch.Stop();
            var durationMs = stopwatch.Elapsed.TotalMilliseconds;
            context.Response.Headers["X-Process-Time"] = $"{durationMs:F2}ms";
            _logger.LogInformation("{Method} {Path} responded {StatusCode} in {Duration:F2}ms",
                context.Request.Method,
                context.Request.Path,
                context.Response.StatusCode,
                durationMs);
            return Task.CompletedTask;
        });

        await _next(context);
    }
}
