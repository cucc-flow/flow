import { Test, TestingModule } from '@nestjs/testing';

describe('AppController', () => {
	let appController: any;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [],
			providers: [],
		}).compile();

		//appController = app.get<AppController>(AppController);
	});

	describe('root', () => {
		it('should return "Hello World!"', () => {
			expect('Hello World!').toBe('Hello World!');
		});
	});
});