import { IEntity } from './IEntity';

export interface IRepository<T extends IEntity> {
	insert(entity: T): T;
	update(entity: T): T;
	deleteById(id: string): void;

	findAll(): T[];
	findById(id: string): T;

	existsById(id: string): boolean;
}

export interface INestedRepository<T extends IEntity> {
	insert(wrapperId: string, entity: T): T;
	update(wrapperId: string, entity: T): T;
	deleteById(wrapperId: string, id: string): void;

	findAll(wrapperId: string): T[];
	findById(wrapperId: string, id: string): T;

	existsById(wrapperId: string, id: string): boolean;
}
