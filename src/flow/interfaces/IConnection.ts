import { IEntity } from '@cucc-flow/common/src/entityManager';

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
