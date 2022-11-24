import { IEntity } from '../interfaces/IEntity';
import { INestedRepository } from '../interfaces/IRepository';
import { INestedRepositoryService } from '../interfaces/IRepositoryService';

export class BaseNestedRepositoryService<T extends IEntity>
	implements INestedRepositoryService<T>
{
	protected Repository: INestedRepository<T>;

	constructor(repository: INestedRepository<T>) {
		this.Repository = repository;
	}

	public findAll(wrapperId: string): T[] {
		return this.Repository.findAll(wrapperId);
	}

	public findById(wrapperId: string, id: string): T {
		return this.Repository.findById(wrapperId, id);
	}

	public update(wrapperId: string, entity: T): T {
		return this.Repository.update(wrapperId, entity);
	}

	public create(wrapperId: string, entity: T): T {
		return this.Repository.insert(wrapperId, entity);
	}

	public delete(wrapperId: string, entity: T): void {
		this.deleteById(wrapperId, entity.id);
	}

	public deleteById(wrapperId: string, id: string): void {
		this.Repository.deleteById(wrapperId, id);
	}

	public existsById(wrapperId: string, id: string): boolean {
		return this.Repository.existsById(wrapperId, id);
	}
}
