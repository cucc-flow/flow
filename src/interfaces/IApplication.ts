import { ILayer } from './ILayer';
import { INode } from './INode';
import { ITemplate } from './ITemplate';

export interface IApplication {
	palette: ITemplate[];
	services: INode[];
	layers: ILayer[];
}
