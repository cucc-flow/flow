import { Injectable } from '@nestjs/common';
import { ArrayBasedNestedRepository } from '@cucc-flow/common/src/entityManager';
import { IConnection } from '../interfaces/IConnection';
import { ConfigurationService } from '../services/ConfigurationService';

@Injectable()
export class ConnectionRepository extends ArrayBasedNestedRepository<IConnection> {
	constructor(private readonly configurationService: ConfigurationService) {
		super(
			(wrapperId: string) =>
				configurationService.Layers[wrapperId].flow.connections,
		);
	}
}
