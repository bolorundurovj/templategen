import fs from 'fs';
import path from 'path';
import { CliOptions, getDefaultBackendPort } from './utils.js';
import { logger } from './logger.js';

type Flavor = 'js' | 'ts' | 'py' | 'cs';
type FileMap = Record<string, string>;

interface PatternContext {
  flavor: Flavor;
  projectName: string;
  framework: string;
  port: number;
}

/**
 * Scaffolds the architectural pattern directories, starter boilerplates, and ARCHITECTURE.md.
 *
 * @param targetDir - The root directory of the backend service or target output.
 * @param options - CLI options including architecturePattern, language, projectName.
 */
export function scaffoldArchitecture(
  targetDir: string,
  options: CliOptions,
): void {
  const pattern = options.architecturePattern?.toLowerCase() || 'monolithic';
  const flavor = resolveFlavor(options.language);
  const framework =
    options.templateName?.split('-').slice(2).join('-') ||
    options.backendFramework ||
    '';
  const ctx: PatternContext = {
    flavor,
    projectName: options.projectName,
    framework,
    port: getDefaultBackendPort(framework),
  };

  const srcRoot = resolveSourceRoot(targetDir, flavor);
  const sourceFiles = buildPatternFiles(pattern, ctx);
  const rootFiles = pattern === 'microservices' ? microservicesFiles(ctx) : {};

  const written: string[] = [];
  for (const [rel, content] of Object.entries(sourceFiles)) {
    const relPath = srcRoot ? path.posix.join(srcRoot, rel) : rel;
    if (writeFile(path.join(targetDir, relPath), content)) {
      written.push(relPath);
    }
  }
  for (const [rel, content] of Object.entries(rootFiles)) {
    if (writeFile(path.join(targetDir, rel), content)) {
      written.push(rel);
    }
  }

  if (flavor === 'py') {
    addPythonPackageMarkers(targetDir, srcRoot, Object.keys(sourceFiles));
  }

  writeFile(
    path.join(targetDir, 'ARCHITECTURE.md'),
    architectureDoc(pattern, ctx.projectName, written),
  );

  logger.info(`Scaffolded ${pattern.toUpperCase()} architecture structure`);
}

function resolveFlavor(language: string | undefined): Flavor {
  const lang = (language || 'typescript').toLowerCase();
  if (lang.includes('python')) return 'py';
  if (lang.includes('csharp')) return 'cs';
  if (lang.includes('typescript')) return 'ts';
  return 'js';
}

function resolveSourceRoot(targetDir: string, flavor: Flavor): string {
  if (flavor === 'cs') return '';
  if (flavor === 'py' && fs.existsSync(path.join(targetDir, 'app'))) {
    return 'app';
  }
  return 'src';
}

function writeFile(filePath: string, content: string): boolean {
  if (fs.existsSync(filePath)) {
    return false;
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content.trimStart(), 'utf8');
  return true;
}

function addPythonPackageMarkers(
  targetDir: string,
  srcRoot: string,
  files: string[],
): void {
  const dirs = new Set<string>();
  if (srcRoot === 'src') {
    dirs.add('');
  }
  for (const file of files) {
    const parts = file.split('/').slice(0, -1);
    for (let i = 1; i <= parts.length; i++) {
      dirs.add(parts.slice(0, i).join('/'));
    }
  }
  for (const dir of dirs) {
    writeFile(path.join(targetDir, srcRoot, dir, '__init__.py'), '');
  }
}

function buildPatternFiles(pattern: string, ctx: PatternContext): FileMap {
  switch (pattern) {
    case 'ddd':
      return dddFiles(ctx);
    case 'cqrs':
      return cqrsFiles(ctx);
    case 'event-driven':
      return eventDrivenFiles(ctx);
    case 'mvc':
      return mvcFiles(ctx);
    case 'microservices':
      return {};
    case 'monolithic':
    default:
      return monolithFiles(ctx);
  }
}

const PATTERN_DOCS: Record<string, { title: string; body: string }> = {
  ddd: {
    title: 'Domain-Driven Design (DDD)',
    body: `This project adopts **Domain-Driven Design (DDD)** principles to keep clear boundaries between domain logic, application orchestration, and infrastructure.

\`\`\`mermaid
flowchart TD
    API["Interfaces / Presentation (Controllers, Routes)"] --> Application["Application Layer (Use Cases)"]
    Application --> Domain["Domain Layer (Entities, Repository Ports)"]
    Infrastructure["Infrastructure Layer (Repository Adapters)"] --> Domain
\`\`\`

## Layer Responsibilities

1. **Domain**: pure business logic, entities, and repository interfaces. No framework or database dependencies.
2. **Application**: use cases that coordinate workflows through domain ports.
3. **Infrastructure**: adapters implementing domain ports (databases, external APIs). An in-memory repository is provided as a starting point.
4. **Interfaces**: HTTP controllers and routes that call application use cases.
`,
  },
  cqrs: {
    title: 'CQRS (Command Query Responsibility Segregation)',
    body: `This project implements **CQRS** to decouple state mutations from reads.

\`\`\`mermaid
flowchart LR
    ClientW["Client Mutation"] --> Command["Command Handler"]
    Command --> Store[("Write Store")]
    Command --> Bus["Event Bus"]
    ClientR["Client Query"] --> Query["Query Handler"]
    Query --> Store
\`\`\`

## Building Blocks
- **Commands**: payloads and handlers that change state and publish events.
- **Queries**: handlers optimized for reads that never mutate state.
- **Events**: an in-process event bus notified after each state change.
- **Store**: an in-memory store; replace it with separate write and read stores as the system grows.
`,
  },
  microservices: {
    title: 'Microservices Architecture',
    body: `This project is packaged as an independently deployable service behind an API gateway.

\`\`\`mermaid
flowchart TD
    Client["Client / Frontend"] --> Gateway["API Gateway (nginx, port 8080)"]
    Gateway --> Service["items-service"]
    Gateway -.-> Next["additional services"]
\`\`\`

## Key Components
- **API Gateway (\`gateway/nginx.conf\`)**: reverse proxy and routing to upstream services.
- **Service image (\`Dockerfile\`)**: container image for this service.
- **Docker Compose (\`docker-compose.yml\`)**: runs the gateway and service locally. Add new services as extra entries and gateway upstreams.

Run \`docker compose up --build\` and open http://localhost:8080.
`,
  },
  'event-driven': {
    title: 'Event-Driven Architecture (EDA)',
    body: `This project leverages **Event-Driven Architecture** for loose coupling and asynchronous processing.

\`\`\`mermaid
flowchart LR
    Producer["Event Producer"] --> Bus["Event Bus / Broker"]
    Bus --> Consumer1["Consumer"]
    Bus --> Consumer2["Consumer"]
\`\`\`

## Building Blocks
- **Events**: event definitions and payload types.
- **Bus**: an in-process event bus; swap it for Redis, Kafka, or RabbitMQ in production.
- **Producers**: publish events when state changes.
- **Consumers**: subscribe to events and handle them asynchronously.
`,
  },
  mvc: {
    title: 'Model-View-Controller (MVC)',
    body: `This project follows the **Model-View-Controller** pattern.

\`\`\`mermaid
flowchart TD
    Router["Router / Routes"] --> Controller["Controller"]
    Controller --> Model["Model (Data & Rules)"]
    Controller --> View["View (Response Formatting)"]
\`\`\`

## Building Blocks
- **Models**: data structures and business rules.
- **Controllers**: request orchestration between models and views.
- **Views**: response representations returned to clients.
`,
  },
  monolithic: {
    title: 'Modular Monolith',
    body: `This project is structured as a **Modular Monolith**: a single deployable unit split into cohesive modules.

\`\`\`mermaid
flowchart TD
    Client["Clients"] --> App["Application"]
    App --> ModA["Items Module"]
    App --> ModN["Other Modules"]
    ModA --> DB[("Database")]
\`\`\`

## Guidelines
- Each module owns its services and data access.
- Modules communicate through their public service interfaces only.
`,
  },
};

function architectureDoc(
  pattern: string,
  projectName: string,
  files: string[],
): string {
  const doc = PATTERN_DOCS[pattern] || PATTERN_DOCS.monolithic;
  const fileList = files.length
    ? `\n## Generated Files\n\n${files.map((f) => `- \`${f}\``).join('\n')}\n`
    : '';
  return `# ${projectName} Architecture: ${doc.title}\n\n${doc.body}${fileList}`;
}

function dddFiles({ flavor }: PatternContext): FileMap {
  if (flavor === 'py') {
    return {
      'domain/entities.py': `
from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Optional


def _utcnow() -> datetime:
    return datetime.now(timezone.utc)


def _validate_name(name: str) -> str:
    if not name or not name.strip():
        raise ValueError("Item name cannot be empty")
    return name.strip()


@dataclass
class Item:
    id: str
    name: str
    description: Optional[str] = None
    created_at: datetime = field(default_factory=_utcnow)

    def __post_init__(self) -> None:
        self.name = _validate_name(self.name)

    def rename(self, new_name: str) -> None:
        self.name = _validate_name(new_name)
`,
      'domain/repositories.py': `
from abc import ABC, abstractmethod
from typing import List, Optional

from .entities import Item


class ItemRepository(ABC):
    @abstractmethod
    async def get_by_id(self, item_id: str) -> Optional[Item]: ...

    @abstractmethod
    async def list_all(self) -> List[Item]: ...

    @abstractmethod
    async def save(self, item: Item) -> Item: ...

    @abstractmethod
    async def delete(self, item_id: str) -> bool: ...
`,
      'infrastructure/in_memory_item_repository.py': `
from typing import Dict, List, Optional

from ..domain.entities import Item
from ..domain.repositories import ItemRepository


class InMemoryItemRepository(ItemRepository):
    def __init__(self) -> None:
        self._items: Dict[str, Item] = {}

    async def get_by_id(self, item_id: str) -> Optional[Item]:
        return self._items.get(item_id)

    async def list_all(self) -> List[Item]:
        return list(self._items.values())

    async def save(self, item: Item) -> Item:
        self._items[item.id] = item
        return item

    async def delete(self, item_id: str) -> bool:
        return self._items.pop(item_id, None) is not None
`,
      'application/use_cases.py': `
import uuid
from typing import List, Optional

from ..domain.entities import Item
from ..domain.repositories import ItemRepository


class CreateItemUseCase:
    def __init__(self, repo: ItemRepository) -> None:
        self.repo = repo

    async def execute(self, name: str, description: Optional[str] = None) -> Item:
        item = Item(id=str(uuid.uuid4()), name=name, description=description)
        return await self.repo.save(item)


class ListItemsUseCase:
    def __init__(self, repo: ItemRepository) -> None:
        self.repo = repo

    async def execute(self) -> List[Item]:
        return await self.repo.list_all()
`,
    };
  }

  if (flavor === 'cs') {
    return {
      'Domain/Item.cs': `
namespace App.Domain;

public class Item
{
    public string Id { get; }
    public string Name { get; private set; }
    public string? Description { get; }
    public DateTime CreatedAt { get; }

    public Item(string id, string name, string? description = null)
    {
        Id = id;
        Name = ValidateName(name);
        Description = description;
        CreatedAt = DateTime.UtcNow;
    }

    public void Rename(string newName) => Name = ValidateName(newName);

    private static string ValidateName(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new ArgumentException("Item name cannot be empty", nameof(name));
        return name.Trim();
    }
}
`,
      'Domain/IItemRepository.cs': `
namespace App.Domain;

public interface IItemRepository
{
    Task<Item?> FindByIdAsync(string id);
    Task<IReadOnlyList<Item>> FindAllAsync();
    Task<Item> SaveAsync(Item item);
    Task<bool> DeleteAsync(string id);
}
`,
      'Infrastructure/InMemoryItemRepository.cs': `
using System.Collections.Concurrent;
using App.Domain;

namespace App.Infrastructure;

public class InMemoryItemRepository : IItemRepository
{
    private readonly ConcurrentDictionary<string, Item> _items = new();

    public Task<Item?> FindByIdAsync(string id) =>
        Task.FromResult(_items.TryGetValue(id, out var item) ? item : null);

    public Task<IReadOnlyList<Item>> FindAllAsync() =>
        Task.FromResult<IReadOnlyList<Item>>(_items.Values.ToList());

    public Task<Item> SaveAsync(Item item)
    {
        _items[item.Id] = item;
        return Task.FromResult(item);
    }

    public Task<bool> DeleteAsync(string id) =>
        Task.FromResult(_items.TryRemove(id, out _));
}
`,
      'Application/CreateItemUseCase.cs': `
using App.Domain;

namespace App.Application;

public record CreateItemRequest(string Name, string? Description);

public class CreateItemUseCase
{
    private readonly IItemRepository _repository;

    public CreateItemUseCase(IItemRepository repository) => _repository = repository;

    public Task<Item> ExecuteAsync(CreateItemRequest request) =>
        _repository.SaveAsync(new Item(Guid.NewGuid().ToString(), request.Name, request.Description));
}
`,
    };
  }

  if (flavor === 'ts') {
    return {
      'domain/item.entity.ts': `
export interface ItemProps {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
}

export class Item {
  private props: ItemProps;

  constructor(props: ItemProps) {
    this.props = { ...props, name: Item.validateName(props.name) };
  }

  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string | undefined {
    return this.props.description;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  rename(newName: string): void {
    this.props.name = Item.validateName(newName);
  }

  private static validateName(name: string): string {
    if (!name || name.trim().length === 0) {
      throw new Error('Item name cannot be empty');
    }
    return name.trim();
  }
}
`,
      'domain/item.repository.ts': `
import { Item } from './item.entity';

export interface ItemRepository {
  findById(id: string): Promise<Item | null>;
  findAll(): Promise<Item[]>;
  save(item: Item): Promise<Item>;
  delete(id: string): Promise<boolean>;
}
`,
      'infrastructure/in-memory-item.repository.ts': `
import { Item } from '../domain/item.entity';
import { ItemRepository } from '../domain/item.repository';

export class InMemoryItemRepository implements ItemRepository {
  private readonly items = new Map<string, Item>();

  async findById(id: string): Promise<Item | null> {
    return this.items.get(id) ?? null;
  }

  async findAll(): Promise<Item[]> {
    return Array.from(this.items.values());
  }

  async save(item: Item): Promise<Item> {
    this.items.set(item.id, item);
    return item;
  }

  async delete(id: string): Promise<boolean> {
    return this.items.delete(id);
  }
}
`,
      'application/create-item.use-case.ts': `
import { randomUUID } from 'crypto';
import { Item } from '../domain/item.entity';
import { ItemRepository } from '../domain/item.repository';

export interface CreateItemDTO {
  name: string;
  description?: string;
}

export class CreateItemUseCase {
  constructor(private readonly itemRepository: ItemRepository) {}

  async execute(dto: CreateItemDTO): Promise<Item> {
    const item = new Item({
      id: randomUUID(),
      name: dto.name,
      description: dto.description,
      createdAt: new Date(),
    });
    return this.itemRepository.save(item);
  }
}
`,
    };
  }

  return {
    'domain/item.entity.js': `
const validateName = (name) => {
  if (!name || name.trim().length === 0) {
    throw new Error('Item name cannot be empty');
  }
  return name.trim();
};

class Item {
  constructor({ id, name, description, createdAt = new Date() }) {
    this.id = id;
    this.name = validateName(name);
    this.description = description;
    this.createdAt = createdAt;
  }

  rename(newName) {
    this.name = validateName(newName);
  }
}

module.exports = { Item };
`,
    'domain/item.repository.js': `
class ItemRepository {
  async findById() {
    throw new Error('Not implemented');
  }

  async findAll() {
    throw new Error('Not implemented');
  }

  async save() {
    throw new Error('Not implemented');
  }

  async delete() {
    throw new Error('Not implemented');
  }
}

module.exports = { ItemRepository };
`,
    'infrastructure/in-memory-item.repository.js': `
const { ItemRepository } = require('../domain/item.repository');

class InMemoryItemRepository extends ItemRepository {
  constructor() {
    super();
    this.items = new Map();
  }

  async findById(id) {
    return this.items.get(id) || null;
  }

  async findAll() {
    return Array.from(this.items.values());
  }

  async save(item) {
    this.items.set(item.id, item);
    return item;
  }

  async delete(id) {
    return this.items.delete(id);
  }
}

module.exports = { InMemoryItemRepository };
`,
    'application/create-item.use-case.js': `
const { randomUUID } = require('crypto');
const { Item } = require('../domain/item.entity');

class CreateItemUseCase {
  constructor(itemRepository) {
    this.itemRepository = itemRepository;
  }

  async execute({ name, description }) {
    const item = new Item({ id: randomUUID(), name, description });
    return this.itemRepository.save(item);
  }
}

module.exports = { CreateItemUseCase };
`,
  };
}

function cqrsFiles({ flavor }: PatternContext): FileMap {
  if (flavor === 'py') {
    return {
      'store/item_store.py': `
from typing import Any, Dict, List

items: List[Dict[str, Any]] = []
`,
      'events/event_bus.py': `
from collections import defaultdict
from typing import Any, Awaitable, Callable, DefaultDict, List

Handler = Callable[[Any], Awaitable[None]]

_handlers: DefaultDict[str, List[Handler]] = defaultdict(list)


def subscribe(event_name: str, handler: Handler) -> None:
    _handlers[event_name].append(handler)


async def publish(event_name: str, payload: Any) -> None:
    for handler in _handlers[event_name]:
        await handler(payload)
`,
      'commands/create_item.py': `
import uuid
from dataclasses import dataclass
from typing import Any, Dict, Optional

from ..events import event_bus
from ..store import item_store


@dataclass
class CreateItemCommand:
    name: str
    description: Optional[str] = None


class CreateItemHandler:
    async def handle(self, command: CreateItemCommand) -> Dict[str, Any]:
        item = {"id": str(uuid.uuid4()), "name": command.name, "description": command.description}
        item_store.items.append(item)
        await event_bus.publish("item.created", item)
        return item
`,
      'queries/get_items.py': `
from dataclasses import dataclass
from typing import Any, Dict, List

from ..store import item_store


@dataclass
class GetItemsQuery:
    limit: int = 10


class GetItemsHandler:
    async def handle(self, query: GetItemsQuery) -> List[Dict[str, Any]]:
        return item_store.items[: query.limit]
`,
    };
  }

  if (flavor === 'cs') {
    return {
      'Store/ItemStore.cs': `
using System.Collections.Concurrent;

namespace App.Store;

public record ItemRecord(string Id, string Name, string? Description);

public static class ItemStore
{
    public static readonly ConcurrentQueue<ItemRecord> Items = new();
}
`,
      'Events/EventBus.cs': `
namespace App.Events;

public static class EventBus
{
    private static readonly Dictionary<string, List<Func<object, Task>>> Handlers = new();

    public static void Subscribe(string eventName, Func<object, Task> handler)
    {
        lock (Handlers)
        {
            if (!Handlers.TryGetValue(eventName, out var list))
                Handlers[eventName] = list = new List<Func<object, Task>>();
            list.Add(handler);
        }
    }

    public static async Task PublishAsync(string eventName, object payload)
    {
        List<Func<object, Task>> handlers;
        lock (Handlers)
        {
            handlers = Handlers.TryGetValue(eventName, out var list) ? list.ToList() : new();
        }
        foreach (var handler in handlers)
            await handler(payload);
    }
}
`,
      'Commands/CreateItemCommand.cs': `
using App.Events;
using App.Store;

namespace App.Commands;

public record CreateItemCommand(string Name, string? Description);

public class CreateItemCommandHandler
{
    public async Task<ItemRecord> HandleAsync(CreateItemCommand command)
    {
        var item = new ItemRecord(Guid.NewGuid().ToString(), command.Name, command.Description);
        ItemStore.Items.Enqueue(item);
        await EventBus.PublishAsync("item.created", item);
        return item;
    }
}
`,
      'Queries/GetItemsQuery.cs': `
using App.Store;

namespace App.Queries;

public record GetItemsQuery(int Limit = 10);

public class GetItemsQueryHandler
{
    public Task<IReadOnlyList<ItemRecord>> HandleAsync(GetItemsQuery query) =>
        Task.FromResult<IReadOnlyList<ItemRecord>>(ItemStore.Items.Take(query.Limit).ToList());
}
`,
    };
  }

  if (flavor === 'ts') {
    return {
      'store/item.store.ts': `
export interface ItemRecord {
  id: string;
  name: string;
  description?: string;
}

export const itemStore: ItemRecord[] = [];
`,
      'events/event-bus.ts': `
type Handler = (payload: unknown) => Promise<void> | void;

const handlers = new Map<string, Handler[]>();

export const eventBus = {
  subscribe(eventName: string, handler: Handler): void {
    handlers.set(eventName, [...(handlers.get(eventName) ?? []), handler]);
  },

  async publish(eventName: string, payload: unknown): Promise<void> {
    for (const handler of handlers.get(eventName) ?? []) {
      await handler(payload);
    }
  },
};
`,
      'commands/create-item.command.ts': `
import { randomUUID } from 'crypto';
import { eventBus } from '../events/event-bus';
import { ItemRecord, itemStore } from '../store/item.store';

export interface CreateItemCommand {
  name: string;
  description?: string;
}

export class CreateItemCommandHandler {
  async execute(command: CreateItemCommand): Promise<ItemRecord> {
    const item: ItemRecord = { id: randomUUID(), ...command };
    itemStore.push(item);
    await eventBus.publish('item.created', item);
    return item;
  }
}
`,
      'queries/get-items.query.ts': `
import { ItemRecord, itemStore } from '../store/item.store';

export interface GetItemsQuery {
  limit?: number;
}

export class GetItemsQueryHandler {
  async execute(query: GetItemsQuery): Promise<ItemRecord[]> {
    return itemStore.slice(0, query.limit ?? 10);
  }
}
`,
    };
  }

  return {
    'store/item.store.js': `
const itemStore = [];

module.exports = { itemStore };
`,
    'events/event-bus.js': `
const handlers = new Map();

const eventBus = {
  subscribe(eventName, handler) {
    handlers.set(eventName, [...(handlers.get(eventName) || []), handler]);
  },

  async publish(eventName, payload) {
    for (const handler of handlers.get(eventName) || []) {
      await handler(payload);
    }
  },
};

module.exports = { eventBus };
`,
    'commands/create-item.command.js': `
const { randomUUID } = require('crypto');
const { eventBus } = require('../events/event-bus');
const { itemStore } = require('../store/item.store');

class CreateItemCommandHandler {
  async execute({ name, description }) {
    const item = { id: randomUUID(), name, description };
    itemStore.push(item);
    await eventBus.publish('item.created', item);
    return item;
  }
}

module.exports = { CreateItemCommandHandler };
`,
    'queries/get-items.query.js': `
const { itemStore } = require('../store/item.store');

class GetItemsQueryHandler {
  async execute({ limit = 10 } = {}) {
    return itemStore.slice(0, limit);
  }
}

module.exports = { GetItemsQueryHandler };
`,
  };
}

function eventDrivenFiles({ flavor }: PatternContext): FileMap {
  if (flavor === 'py') {
    return {
      'events/item_events.py': `
from dataclasses import dataclass, field
from datetime import datetime, timezone


def _utcnow() -> datetime:
    return datetime.now(timezone.utc)


ITEM_CREATED = "item.created"


@dataclass
class ItemCreatedEvent:
    item_id: str
    name: str
    occurred_at: datetime = field(default_factory=_utcnow)
`,
      'bus/event_bus.py': `
from collections import defaultdict
from typing import Any, Awaitable, Callable, DefaultDict, List

Handler = Callable[[Any], Awaitable[None]]


class EventBus:
    def __init__(self) -> None:
        self._handlers: DefaultDict[str, List[Handler]] = defaultdict(list)

    def subscribe(self, event_name: str, handler: Handler) -> None:
        self._handlers[event_name].append(handler)

    async def publish(self, event_name: str, payload: Any) -> None:
        for handler in self._handlers[event_name]:
            await handler(payload)


event_bus = EventBus()
`,
      'producers/item_producer.py': `
from ..bus.event_bus import EventBus, event_bus
from ..events.item_events import ITEM_CREATED, ItemCreatedEvent


class ItemEventProducer:
    def __init__(self, bus: EventBus = event_bus) -> None:
        self.bus = bus

    async def publish_item_created(self, event: ItemCreatedEvent) -> None:
        await self.bus.publish(ITEM_CREATED, event)
`,
      'consumers/item_consumer.py': `
import logging

from ..bus.event_bus import EventBus, event_bus
from ..events.item_events import ITEM_CREATED, ItemCreatedEvent

logger = logging.getLogger(__name__)


class ItemEventConsumer:
    def __init__(self, bus: EventBus = event_bus) -> None:
        bus.subscribe(ITEM_CREATED, self.on_item_created)

    async def on_item_created(self, event: ItemCreatedEvent) -> None:
        logger.info("Item created: %s", event.item_id)
`,
    };
  }

  if (flavor === 'cs') {
    return {
      'Events/ItemCreatedEvent.cs': `
namespace App.Events;

public record ItemCreatedEvent(string ItemId, string Name, DateTime OccurredAt);
`,
      'Bus/EventBus.cs': `
namespace App.Bus;

public class EventBus
{
    private readonly Dictionary<Type, List<Func<object, Task>>> _handlers = new();

    public void Subscribe<TEvent>(Func<TEvent, Task> handler) where TEvent : notnull
    {
        lock (_handlers)
        {
            if (!_handlers.TryGetValue(typeof(TEvent), out var list))
                _handlers[typeof(TEvent)] = list = new List<Func<object, Task>>();
            list.Add(e => handler((TEvent)e));
        }
    }

    public async Task PublishAsync<TEvent>(TEvent @event) where TEvent : notnull
    {
        List<Func<object, Task>> handlers;
        lock (_handlers)
        {
            handlers = _handlers.TryGetValue(typeof(TEvent), out var list) ? list.ToList() : new();
        }
        foreach (var handler in handlers)
            await handler(@event);
    }
}
`,
      'Producers/ItemEventProducer.cs': `
using App.Bus;
using App.Events;

namespace App.Producers;

public class ItemEventProducer
{
    private readonly EventBus _bus;

    public ItemEventProducer(EventBus bus) => _bus = bus;

    public Task PublishItemCreatedAsync(string itemId, string name) =>
        _bus.PublishAsync(new ItemCreatedEvent(itemId, name, DateTime.UtcNow));
}
`,
      'Consumers/ItemEventConsumer.cs': `
using App.Bus;
using App.Events;

namespace App.Consumers;

public class ItemEventConsumer
{
    private readonly ILogger<ItemEventConsumer> _logger;

    public ItemEventConsumer(EventBus bus, ILogger<ItemEventConsumer> logger)
    {
        _logger = logger;
        bus.Subscribe<ItemCreatedEvent>(OnItemCreatedAsync);
    }

    private Task OnItemCreatedAsync(ItemCreatedEvent @event)
    {
        _logger.LogInformation("Item created: {ItemId}", @event.ItemId);
        return Task.CompletedTask;
    }
}
`,
    };
  }

  if (flavor === 'ts') {
    return {
      'events/item-created.event.ts': `
export const ITEM_CREATED = 'item.created';

export interface ItemCreatedEvent {
  itemId: string;
  name: string;
  occurredAt: string;
}
`,
      'bus/event-bus.ts': `
type Handler<T> = (payload: T) => Promise<void> | void;

export class EventBus {
  private readonly handlers = new Map<string, Handler<unknown>[]>();

  subscribe<T>(eventName: string, handler: Handler<T>): void {
    const list = this.handlers.get(eventName) ?? [];
    list.push(handler as Handler<unknown>);
    this.handlers.set(eventName, list);
  }

  async publish<T>(eventName: string, payload: T): Promise<void> {
    for (const handler of this.handlers.get(eventName) ?? []) {
      await handler(payload);
    }
  }
}

export const eventBus = new EventBus();
`,
      'producers/item.producer.ts': `
import { EventBus, eventBus } from '../bus/event-bus';
import { ITEM_CREATED, ItemCreatedEvent } from '../events/item-created.event';

export class ItemEventProducer {
  constructor(private readonly bus: EventBus = eventBus) {}

  async publishItemCreated(itemId: string, name: string): Promise<void> {
    const event: ItemCreatedEvent = {
      itemId,
      name,
      occurredAt: new Date().toISOString(),
    };
    await this.bus.publish(ITEM_CREATED, event);
  }
}
`,
      'consumers/item.consumer.ts': `
import { EventBus, eventBus } from '../bus/event-bus';
import { ITEM_CREATED, ItemCreatedEvent } from '../events/item-created.event';

export class ItemEventConsumer {
  constructor(bus: EventBus = eventBus) {
    bus.subscribe<ItemCreatedEvent>(ITEM_CREATED, (event) =>
      this.handleItemCreated(event),
    );
  }

  async handleItemCreated(event: ItemCreatedEvent): Promise<void> {
    console.log('Item created:', event.itemId);
  }
}
`,
    };
  }

  return {
    'events/item-created.event.js': `
const ITEM_CREATED = 'item.created';

const createItemCreatedEvent = (itemId, name) => ({
  itemId,
  name,
  occurredAt: new Date().toISOString(),
});

module.exports = { ITEM_CREATED, createItemCreatedEvent };
`,
    'bus/event-bus.js': `
class EventBus {
  constructor() {
    this.handlers = new Map();
  }

  subscribe(eventName, handler) {
    this.handlers.set(eventName, [...(this.handlers.get(eventName) || []), handler]);
  }

  async publish(eventName, payload) {
    for (const handler of this.handlers.get(eventName) || []) {
      await handler(payload);
    }
  }
}

const eventBus = new EventBus();

module.exports = { EventBus, eventBus };
`,
    'producers/item.producer.js': `
const { eventBus } = require('../bus/event-bus');
const { ITEM_CREATED, createItemCreatedEvent } = require('../events/item-created.event');

class ItemEventProducer {
  constructor(bus = eventBus) {
    this.bus = bus;
  }

  async publishItemCreated(itemId, name) {
    await this.bus.publish(ITEM_CREATED, createItemCreatedEvent(itemId, name));
  }
}

module.exports = { ItemEventProducer };
`,
    'consumers/item.consumer.js': `
const { eventBus } = require('../bus/event-bus');
const { ITEM_CREATED } = require('../events/item-created.event');

class ItemEventConsumer {
  constructor(bus = eventBus) {
    bus.subscribe(ITEM_CREATED, (event) => this.handleItemCreated(event));
  }

  async handleItemCreated(event) {
    console.log('Item created:', event.itemId);
  }
}

module.exports = { ItemEventConsumer };
`,
  };
}

function mvcFiles({ flavor }: PatternContext): FileMap {
  if (flavor === 'py') {
    return {
      'mvc/models.py': `
from dataclasses import dataclass
from typing import Optional


@dataclass
class ItemModel:
    id: int
    name: str
    description: Optional[str] = None
`,
      'mvc/views.py': `
from typing import Any, Dict, List

from .models import ItemModel


def render_item(item: ItemModel) -> Dict[str, Any]:
    return {"id": item.id, "name": item.name, "description": item.description}


def render_items(items: List[ItemModel]) -> List[Dict[str, Any]]:
    return [render_item(item) for item in items]
`,
      'mvc/controllers.py': `
from typing import Any, Dict, List, Optional

from .models import ItemModel
from .views import render_item, render_items


class ItemController:
    def __init__(self) -> None:
        self._items: List[ItemModel] = []

    def index(self) -> List[Dict[str, Any]]:
        return render_items(self._items)

    def create(self, name: str, description: Optional[str] = None) -> Dict[str, Any]:
        item = ItemModel(id=len(self._items) + 1, name=name, description=description)
        self._items.append(item)
        return render_item(item)
`,
    };
  }

  if (flavor === 'cs') {
    return {
      'Models/CatalogItem.cs': `
namespace App.Models;

public record CatalogItem(int Id, string Name, string? Description);
`,
      'Views/CatalogItemView.cs': `
using App.Models;

namespace App.Views;

public static class CatalogItemView
{
    public static object Render(CatalogItem item) =>
        new { id = item.Id, name = item.Name, description = item.Description };

    public static IEnumerable<object> RenderAll(IEnumerable<CatalogItem> items) => items.Select(Render);
}
`,
      'Controllers/CatalogController.cs': `
using App.Models;
using App.Views;

namespace App.Controllers;

public class CatalogController
{
    private readonly List<CatalogItem> _items = new();

    public IEnumerable<object> Index() => CatalogItemView.RenderAll(_items);

    public object Create(string name, string? description = null)
    {
        var item = new CatalogItem(_items.Count + 1, name, description);
        _items.Add(item);
        return CatalogItemView.Render(item);
    }
}
`,
    };
  }

  if (flavor === 'ts') {
    return {
      'models/item.model.ts': `
export interface ItemModel {
  id: number;
  name: string;
  description?: string;
}
`,
      'views/item.view.ts': `
import { ItemModel } from '../models/item.model';

export const renderItem = (item: ItemModel) => ({
  id: item.id,
  name: item.name,
  description: item.description ?? null,
});

export const renderItems = (items: ItemModel[]) => items.map(renderItem);
`,
      'controllers/item.controller.ts': `
import { ItemModel } from '../models/item.model';
import { renderItem, renderItems } from '../views/item.view';

export class ItemController {
  private readonly items: ItemModel[] = [];

  index() {
    return renderItems(this.items);
  }

  create(name: string, description?: string) {
    const item: ItemModel = { id: this.items.length + 1, name, description };
    this.items.push(item);
    return renderItem(item);
  }
}
`,
    };
  }

  return {
    'models/item.model.js': `
const createItemModel = (id, name, description) => ({ id, name, description });

module.exports = { createItemModel };
`,
    'views/item.view.js': `
const renderItem = (item) => ({
  id: item.id,
  name: item.name,
  description: item.description ?? null,
});

const renderItems = (items) => items.map(renderItem);

module.exports = { renderItem, renderItems };
`,
    'controllers/item.controller.js': `
const { createItemModel } = require('../models/item.model');
const { renderItem, renderItems } = require('../views/item.view');

class ItemController {
  constructor() {
    this.items = [];
  }

  index() {
    return renderItems(this.items);
  }

  create(name, description) {
    const item = createItemModel(this.items.length + 1, name, description);
    this.items.push(item);
    return renderItem(item);
  }
}

module.exports = { ItemController };
`,
  };
}

function monolithFiles({ flavor }: PatternContext): FileMap {
  if (flavor === 'py') {
    return {
      'modules/items/service.py': `
from typing import Any, Dict, List


class ItemsService:
    def __init__(self) -> None:
        self._items: List[Dict[str, Any]] = []

    def list(self) -> List[Dict[str, Any]]:
        return list(self._items)

    def add(self, name: str) -> Dict[str, Any]:
        item = {"id": len(self._items) + 1, "name": name}
        self._items.append(item)
        return item
`,
    };
  }

  if (flavor === 'cs') {
    return {
      'Modules/Items/ItemsModule.cs': `
namespace App.Modules.Items;

public record ModuleItem(int Id, string Name);

public class ItemsModule
{
    private readonly List<ModuleItem> _items = new();

    public IReadOnlyList<ModuleItem> List() => _items;

    public ModuleItem Add(string name)
    {
        var item = new ModuleItem(_items.Count + 1, name);
        _items.Add(item);
        return item;
    }
}
`,
    };
  }

  if (flavor === 'ts') {
    return {
      'modules/items/items.service.ts': `
export interface ModuleItem {
  id: number;
  name: string;
}

export class ItemsService {
  private readonly items: ModuleItem[] = [];

  list(): ModuleItem[] {
    return [...this.items];
  }

  add(name: string): ModuleItem {
    const item = { id: this.items.length + 1, name };
    this.items.push(item);
    return item;
  }
}
`,
    };
  }

  return {
    'modules/items/items.service.js': `
class ItemsService {
  constructor() {
    this.items = [];
  }

  list() {
    return [...this.items];
  }

  add(name) {
    const item = { id: this.items.length + 1, name };
    this.items.push(item);
    return item;
  }
}

module.exports = { ItemsService };
`,
  };
}

const PYTHON_START_COMMANDS: Record<string, string> = {
  fastapi: '["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]',
  django: '["python", "manage.py", "runserver", "0.0.0.0:8000"]',
  flask: '["python", "app.py"]',
  sanic: '["python", "main.py"]',
  tornado: '["python", "main.py"]',
};

function dockerfile({ flavor, framework, port }: PatternContext): string {
  if (flavor === 'py') {
    const cmd = PYTHON_START_COMMANDS[framework] || '["python", "main.py"]';
    return `
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE ${port}
CMD ${cmd}
`;
  }

  if (flavor === 'cs') {
    return `
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet publish App.csproj -c Release -o /out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /out .
ENV ASPNETCORE_URLS=http://+:${port}
EXPOSE ${port}
ENTRYPOINT ["dotnet", "App.dll"]
`;
  }

  const isTs = flavor === 'ts';
  const entry = framework === 'nestjs' ? 'main' : 'index';
  const install = isTs ? 'npm install' : 'npm install --omit=dev';
  const build = isTs && framework !== 'nestjs' ? 'RUN npm run build\n' : '';
  const cmd = isTs
    ? framework === 'nestjs'
      ? '["npm", "start"]'
      : `["node", "dist/${entry}.js"]`
    : `["node", "src/${entry}.js"]`;
  return `
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN ${install}
COPY . .
${build}ENV PORT=${port}
EXPOSE ${port}
CMD ${cmd}
`;
}

function microservicesFiles(ctx: PatternContext): FileMap {
  const healthPath = ctx.framework === 'nestjs' ? '/health' : '/api/health';
  return {
    Dockerfile: dockerfile(ctx),
    '.dockerignore': `
node_modules
dist
.venv
__pycache__
bin
obj
.env
`,
    'docker-compose.yml': `
services:
  gateway:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./gateway/nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - items-service

  items-service:
    build:
      context: .
      dockerfile: Dockerfile
    environment:
      - PORT=${ctx.port}
      - SERVICE_NAME=items-service
    expose:
      - "${ctx.port}"
    healthcheck:
      test: ["CMD-SHELL", "wget -qO- http://localhost:${ctx.port}${healthPath} || curl -fs http://localhost:${ctx.port}${healthPath} || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 5
`,
    'gateway/nginx.conf': `
events { worker_connections 1024; }

http {
  upstream items_service {
    server items-service:${ctx.port};
  }

  server {
    listen 80;

    location = /gateway/health {
      default_type application/json;
      return 200 '{"status":"healthy","service":"gateway"}';
    }

    location / {
      proxy_pass http://items_service;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
  }
}
`,
  };
}
