import { Injectable } from '@nestjs/common';
import { ArrayBasedRepository } from '@cucc-flow/common/src/entityManager';
import { ITemplate } from '../interfaces/ITemplate';
import { ConfigurationService } from '../services/ConfigurationService';

@Injectable()
export class PaletteRepository extends ArrayBasedRepository<ITemplate> {
	constructor(private readonly configurationService: ConfigurationService) {
		super(configurationService.Palette);
	}
}
