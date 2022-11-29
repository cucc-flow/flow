import { IEntity } from '../../entityManager';

export interface IConnection extends IEntity {
	from: {
		node: string;
		output: string;
	};
	to: {
		node: string;
		input: string;
	};
}
