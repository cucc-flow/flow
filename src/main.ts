import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';

// Services
import { ConfigurationService } from './services/ConfigurationService';

// Repositories
import { LayerRepository } from './repositories/LayerRepository';
import { PaletteRepository } from './repositories/PaletteRepository';

// Controllers
import { PaletteController } from './controllers/PaletteController';
import { LayerController } from './controllers/LayerController';

@Module({
	imports: [],
	controllers: [
		PaletteController,
		LayerController,
	],
	providers: [
		ConfigurationService,

		PaletteRepository,
		LayerRepository,
	],
})
class Main {}

async function bootstrap() {
	const app = await NestFactory.create(Main);
	await app.listen(8080);
}
bootstrap();
