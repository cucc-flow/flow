import { ILayer } from '../interfaces/ILayer';
import { ArrayBasedRepository } from '../../entityManager';
import { ConfigurationService } from '../services/ConfigurationService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LayerRepository extends ArrayBasedRepository<ILayer> {
	constructor(private readonly configurationService: ConfigurationService) {
		super(configurationService.Layers);
	}
}
