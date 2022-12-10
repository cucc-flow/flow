import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { ILayer } from '../interfaces/ILayer';
import { LayerRepository } from '../repositories/LayerRepository';

@Controller()
export class LayerController {
	constructor(private readonly layerRepository: LayerRepository) {}

	@Get('/layers')
	public getPalette(): any[] {
		let layers = this.layerRepository.findAll();

		layers.forEach(layer => {
			let model = [];

			layer.flow.nodes.forEach(node => {
				model.push({
					id: node.id,
					data: node.configuration,
					type: 'custom',
					label: node.id,
					position: node.position
				});
			});

			layer.flow.connections.forEach(connection => {
				model.push({
					id: connection.id,
					source: connection.from.node,
					sourceHandle: connection.from.output,
					target: connection.to.node
				});
			});

			(layer as any).model = model;
		})
		return layers;
	}

	@Get('/layers/:layerId')
	public getTemplate(@Param() params): ILayer {
		return this.layerRepository.findById(params.layerId);
	}

	@Post('/layers')
	public createTemplate(@Body() body): ILayer {
		return this.layerRepository.insert(body);
	}

	@Put('/layers/:layerId')
	public updateTemplate(@Param() params, @Body() body): ILayer {
		return this.layerRepository.update(body);
	}

	@Delete('/layers/:layerId')
	public deleteTemplate(@Param() params): void {
		return this.layerRepository.deleteById(params.layerId);
	}
}
