namespace App.Models;

public record Item(
    int Id,
    string Title,
    string Description,
    bool Completed,
    DateTime CreatedAt,
    DateTime UpdatedAt
);

public record CreateItemDto(
    string Title,
    string? Description,
    bool? Completed
);

public record UpdateItemDto(
    string? Title,
    string? Description,
    bool? Completed
);
