import { Module } from '@nestjs/common';

// Services
import { ConfigurationService } from './flow/services/ConfigurationService';

// Repositories
import { ConnectionRepository } from './flow/repositories/ConnectionRepository';
import { LayerRepository } from './flow/repositories/LayerRepository';
import { NodeRepository } from './flow/repositories/NodeRepository';
import { PaletteRepository } from './flow/repositories/PaletteRepository';

// Controllers
import { PaletteController } from './flow/controllers/PaletteController';
import { LayerController } from './flow/controllers/LayerController';
import { NodeController } from './flow/controllers/NodeController';
import { ConnectionController } from './flow/controllers/ConnectionController';

@Module({
	imports: [],
	controllers: [
		PaletteController,
		LayerController,
		NodeController,
		ConnectionController,
	],
	providers: [
		ConfigurationService,

		PaletteRepository,
		LayerRepository,
		NodeRepository,
		ConnectionRepository,
	],
})
export class Flow {}
