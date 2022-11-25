import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { IConnection } from '../interfaces/IConnection';
import { ConnectionRepository } from '../repositories/ConnectionRepository';

@Controller()
export class ConnectionController {
	constructor(private readonly connectionRepository: ConnectionRepository) {}

	@Get('/layers/:layerId/connections')
	public getPalette(@Param() params): IConnection[] {
		return this.connectionRepository.findAll(params.layerId);
	}

	@Get('/layers/:layerId/connections/:connectionId')
	public getTemplate(@Param() params): IConnection {
		return this.connectionRepository.findById(
			params.layerId,
			params.connectionId,
		);
	}

	@Post('/layers/:layerId/connections')
	public createTemplate(
		@Param() params,
		@Body() body: IConnection,
	): IConnection {
		return this.connectionRepository.insert(params.layerId, body);
	}

	@Put('/layers/:layerId/connections/:connectionId')
	public updateTemplate(
		@Param() params,
		@Body() body: IConnection,
	): IConnection {
		return this.connectionRepository.update(params.layerId, body);
	}

	@Delete('/layers/:layerId/connections/:connectionId')
	public deleteTemplate(@Param() params): void {
		return this.connectionRepository.deleteById(
			params.layerId,
			params.connectionId,
		);
	}
}
