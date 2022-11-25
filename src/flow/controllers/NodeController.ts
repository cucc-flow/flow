import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { INodeWithPosition } from '../../interfaces/ILayer';
import { NodeRepository } from '../../repositories/NodeRepository';

@Controller()
export class NodeController {
	constructor(private readonly nodeRepository: NodeRepository) {}

	@Get('/layers/:layerId/nodes')
	public getNodes(@Param() params): INodeWithPosition[] {
		return this.nodeRepository.findAll(params.layerId);
	}

	@Get('/layers/:layerId/nodes/:nodeId')
	public getTemplate(@Param() params): INodeWithPosition {
		return this.nodeRepository.findById(params.layerId, params.nodeId);
	}

	@Post('/layers/:layerId/nodes')
	public createTemplate(
		@Param() params,
		@Body() body: INodeWithPosition,
	): INodeWithPosition {
		return this.nodeRepository.insert(params.layerId, body);
	}

	@Put('/layers/:layerId/nodes/:nodeId')
	public updateTemplate(
		@Param() params,
		@Body() body: INodeWithPosition,
	): INodeWithPosition {
		return this.nodeRepository.update(params.layerId, body);
	}

	@Delete('/layers/:layerId/nodes/:nodeId')
	public deleteTemplate(@Param() params): void {
		return this.nodeRepository.deleteById(params.layerId, params.nodeId);
	}
}
