import { IEntity } from '../../_entityManager/interfaces/IEntity';

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
