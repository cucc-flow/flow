import { NestFactory } from '@nestjs/core';
import { Flow } from './Flow';

async function bootstrap() {
	const app = await NestFactory.create(Flow);
	await app.listen(8080);
}
bootstrap();
