import { ConflictException } from '@nestjs/common';
import { IEntity } from '../interfaces/IEntity';
import { INestedRepository } from '../interfaces/IRepository';

export class ArrayBasedNestedRepository<T extends IEntity>
	implements INestedRepository<T>
{
	protected StorageGenerator: (wrapperId: string) => T[];

	constructor(storageGenerator: (wrapperId: string) => T[]) {
		this.StorageGenerator = storageGenerator;
	}

	insert(wrapperId: string, entity: T): T {
		if (this.existsById(wrapperId, entity.id)) {
			throw new ConflictException();
		}

		this.StorageGenerator(wrapperId).push(entity);
		return entity;
	}

	update(wrapperId: string, entity: T): T {
		if (!this.existsById(wrapperId, entity.id)) {
			throw new Error('Item not found');
		}

		this.deleteById(wrapperId, entity.id);
		return this.insert(wrapperId, entity);
	}

	deleteById(wrapperId: string, id: string): void {
		if (!this.existsById(wrapperId, id)) {
			return;
		}

		const index = this.StorageGenerator(wrapperId).indexOf(
			this.StorageGenerator(wrapperId).find((entity) => entity.id === id),
		);
		this.StorageGenerator(wrapperId).splice(index, 1);
	}

	findAll(wrapperId: string): T[] {
		const storage: T[] = this.StorageGenerator(wrapperId);
		if (storage === null || storage === undefined) {
			throw new Error('Storage does not exist');
		}
		return storage;
	}

	findById(wrapperId: string, id: string): T {
		const storage: T[] = this.StorageGenerator(wrapperId);
		if (storage === null || storage === undefined) {
			throw new Error('Storage does not exist');
		}
		return storage.find((entity) => entity.id === id);
	}

	existsById(wrapperId: string, id: string): boolean {
		const storage: T[] = this.StorageGenerator(wrapperId);
		if (storage === null || storage === undefined) {
			throw new Error('Storage does not exist');
		}

		return storage.some((entity) => entity.id === id);
	}
}
