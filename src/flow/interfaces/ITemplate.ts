
import { IEntity } from '../../entityManager';

export interface ITemplate extends IEntity {
	name: string;
	category: string;
	type: 'node' | 'service' | 'plugin';
	backend: string;
	frontend: string;
	template: string;
}
