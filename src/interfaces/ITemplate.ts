import { IEntity } from '../../_entityManager/interfaces/IEntity';

export interface ITemplate extends IEntity {
	name: string;
	category: string;
	type: 'node' | 'service' | 'plugin';
	backend: string;
	frontend: string;
	template: string;
}
