import { IEntity } from '../interfaces/IEntity';
import { IRepository } from '../interfaces/IRepository';
import { IRepositoryService } from '../interfaces/IRepositoryService';

export class BaseRepositoryService<T extends IEntity>
	implements IRepositoryService<T>
{
	protected Repository: IRepository<T>;

	constructor(repository: IRepository<T>) {
		this.Repository = repository;
	}

	public findAll(): T[] {
		return this.Repository.findAll();
	}

	public findById(id: string): T {
		return this.Repository.findById(id);
	}

	public update(entity: T): T {
		return this.Repository.update(entity);
	}

	public create(entity: T): T {
		return this.Repository.insert(entity);
	}

	public delete(entity: T): void {
		this.deleteById(entity.id);
	}

	public deleteById(id: string): void {
		this.Repository.deleteById(id);
	}

	public existsById(id: string): boolean {
		return this.Repository.existsById(id);
	}
}
