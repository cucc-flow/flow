import { ConflictException } from '@nestjs/common';
import { IEntity } from '../interfaces/IEntity';
import { IRepository } from '../interfaces/IRepository';

export class ArrayBasedRepository<T extends IEntity> implements IRepository<T> {
	protected Storage: T[];

	constructor(storage: T[]) {
		this.Storage = storage;
	}

	insert(entity: T): T {
		if (this.existsById(entity.id)) {
			throw new ConflictException();
		}

		this.Storage.push(entity);

		return entity;
	}

	update(entity: T): T {
		if (!this.existsById(entity.id)) {
			throw new Error('Item not found');
		}

		this.deleteById(entity.id);
		return this.insert(entity);
	}

	deleteById(id: string): void {
		if (!this.existsById(id)) {
			return;
		}

		const index = this.Storage.indexOf(
			this.Storage.find((entity) => entity.id === id),
		);
		this.Storage.splice(index, 1);
	}

	findAll(): T[] {
		return this.Storage;
	}

	findById(id: string): T {
		return this.Storage.find((entity) => entity.id === id);
	}

	existsById(id: string): boolean {
		return this.Storage.some((entity) => entity.id === id);
	}
}
