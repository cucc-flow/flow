import { Module } from '@nestjs/common';

// Services
import { ConfigurationService } from './services/ConfigurationService';

// Repositories
import { ConnectionRepository } from './repositories/ConnectionRepository';
import { LayerRepository } from './repositories/LayerRepository';
import { NodeRepository } from './repositories/NodeRepository';
import { PaletteRepository } from './repositories/PaletteRepository';

// Controllers
import { PaletteController } from './controllers/PaletteController';
import { LayerController } from './controllers/LayerController';
import { NodeController } from './controllers/NodeController';
import { ConnectionController } from './controllers/ConnectionController';

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
