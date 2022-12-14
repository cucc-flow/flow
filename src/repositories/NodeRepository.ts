import { Injectable } from '@nestjs/common';
import { ArrayBasedNestedRepository } from '../../_entityManager/repositories/ArrayBasedNestedRepository';
import { INodeWithPosition } from '../interfaces/ILayer';
import { ConfigurationService } from '../services/ConfigurationService';

@Injectable()
export class NodeRepository extends ArrayBasedNestedRepository<INodeWithPosition> {
	constructor(private readonly configurationService: ConfigurationService) {
		super(
			(wrapperId: string) => configurationService.Layers[wrapperId].flow.nodes,
		);
	}
}
