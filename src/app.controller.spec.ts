import { Test, TestingModule } from '@nestjs/testing';

describe('AppController', () => {
	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [],
			providers: [],
		}).compile();

	});

	describe('root', () => {
		it('should return "Hello World!"', () => {
			expect('Hello World!').toBe('Hello World!');
		});
	});
});
