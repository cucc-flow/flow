import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { ITemplate } from '../../interfaces/ITemplate';
import { PaletteRepository } from '../../repositories/PaletteRepository';

@Controller()
export class PaletteController {
	constructor(private readonly paletteRepository: PaletteRepository) {}

	@Get('/palette')
	public getPalette(): ITemplate[] {
		return this.paletteRepository.findAll();
	}

	@Get('/palette/:templateId')
	public getTemplate(@Param() params): ITemplate {
		return this.paletteRepository.findById(params.templateId);
	}

	@Post('/palette')
	public createTemplate(@Body() body: ITemplate): ITemplate {
		return this.paletteRepository.insert(body);
	}

	@Put('/palette/:templateId')
	public updateTemplate(@Param() params, @Body() body: ITemplate): ITemplate {
		return this.paletteRepository.update(body);
	}

	@Delete('/palette/:templateId')
	public deleteTemplate(@Param() params): void {
		return this.paletteRepository.deleteById(params.templateId);
	}
}
