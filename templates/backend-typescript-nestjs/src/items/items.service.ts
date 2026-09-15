import { Injectable, NotFoundException } from '@nestjs/common';

export interface Item {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateItemDto {
  title: string;
  description?: string;
}

export interface UpdateItemDto {
  title?: string;
  description?: string;
  completed?: boolean;
}

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  private nextId = 1;

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    const item = this.items.find((i) => i.id === id);
    if (!item) throw new NotFoundException(`Item with id ${id} not found`);
    return item;
  }

  create(dto: CreateItemDto): Item {
    const now = new Date().toISOString();
    const item: Item = {
      id: String(this.nextId++),
      title: dto.title,
      description: dto.description || '',
      completed: false,
      createdAt: now,
      updatedAt: now,
    };
    this.items.push(item);
    return item;
  }

  update(id: string, dto: UpdateItemDto): Item {
    const item = this.findOne(id);
    Object.assign(item, { ...dto, updatedAt: new Date().toISOString() });
    return item;
  }

  remove(id: string): void {
    const index = this.items.findIndex((i) => i.id === id);
    if (index === -1) throw new NotFoundException(`Item with id ${id} not found`);
    this.items.splice(index, 1);
  }
}
