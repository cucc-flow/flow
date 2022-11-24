export interface IRepositoryService<T> {
	findAll(): T[];
	findById(id: string): T;
	create(entity: T): T;
	update(entity: T): T;
	delete(entity: T): void;
	deleteById(id: string): void;
	existsById(id: string): boolean;
}

export interface INestedRepositoryService<T> {
	findAll(wrapperId: string): T[];
	findById(wrapperId: string, id: string): T;
	create(wrapperId: string, entity: T): T;
	update(wrapperId: string, entity: T): T;
	delete(wrapperId: string, enity: T): void;
	deleteById(wrapperId: string, id: string): void;
	existsById(wrapperId: string, id: string): boolean;
}
