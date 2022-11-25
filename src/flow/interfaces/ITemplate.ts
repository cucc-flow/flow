
import { IEntity } from '@cucc-flow/common/src/entityManager';

export interface ITemplate extends IEntity {
	name: string;
	category: string;
	type: 'node' | 'service' | 'plugin';
	backend: string;
	frontend: string;
	template: string;
}
