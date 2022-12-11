export interface INode {
	id: string;
	templateId: string;
	configuration: any;
    position: {
		x: number;
		y: number;
	};
    plugins: INode[];
}

export interface IConnection {
    id: string;
	from: {
		node: string;
		output: string;
	};
	to: {
		node: string;
		input: string;
	};
}

export interface ILayer {
	id: string;
	name: string;
	flow: {
		nodes: INode[];
		connections: IConnection[];
	};
}