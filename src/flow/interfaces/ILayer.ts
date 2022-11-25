import { IConnection } from './IConnection';
import { INode } from './INode';

export type INodeWithPosition = INode & {
	position: {
		x: number;
		y: number;
	};
};

export interface ILayer {
	id: string;
	name: string;
	flow: {
		nodes: INodeWithPosition[];
		connections: IConnection[];
	};
}
