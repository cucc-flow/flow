import { Test, TestingModule } from '@nestjs/testing';
import { Layer } from '../entities/Layer';
import { Template, TemplateScope } from '../entities/Template';
import { ConnectionRepository } from '../repositories/ConnectionRepository';
import { LayerRepository } from '../repositories/LayerRepository';
import { NodeRepository } from '../repositories/NodeRepository';
import { TemplateRepository } from '../repositories/TemplateRepository';
import { EnvironmentService } from './EnvironmentService';
import { FlowService } from './FlowService';
import { MessagingService } from './MessagingService';

describe('FlowService', () => {
	let flow: FlowService

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [],
			providers: [
				FlowService,
				MessagingService,
				EnvironmentService,
				TemplateRepository,
				LayerRepository,
				NodeRepository,
				ConnectionRepository,
				Layer
			],
		}).compile();

		flow = app.get(FlowService);
	});

	describe('root', () => {
		it('should return "Hello World!"', async () => {
			flow.templateRepository.Add('trigger', TemplateScope.Node, `
class extends $.Node {
	constructor() {
		
		console.log('Hello from the inside');
	}
}`);
			await flow.layerRepository.CreateLayer('default');
			flow.layerRepository.FindById('default').CreateNode('uuid1', 'trigger');
			flow.layerRepository.FindById('default').FindNodeById('uuid1').Configure(null);
			expect('Hello World!').toBe('Hello World!');
		});
	});
});

let code = `
class extends $.Node { 
	output = new $.Output(\"Output\"); 
	_interval; 
	
	constructor(id, channel) { 
		super(id, channel); 
	} 
	
	configure(config) { 
		console.log('config trigger node'); 
		this._interval = setInterval(() => { 
			this.output.Send(\"Hello\"); 
		}, 10000); 
	}
	
	destructor() { 
		clearInterval(this._interval); 
	} 
}`;