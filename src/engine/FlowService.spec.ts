import { Test, TestingModule } from '@nestjs/testing';
import { Layer } from './entities/Layer';
import { TemplateScope } from './entities/Template';
import { Flow } from './Flow';

describe('FlowService', () => {
	let flow: Flow;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [],
			providers: [
			],
		}).compile();

		flow = new Flow();
	});

	describe('root', () => {
		it('should return "Hello World!"', async () => {
			flow.AddTemplate('sender', TemplateScope.Node, null);
			await flow.templates.find(t => t.id === 'sender').UpdateCode(`
			class extends $.Node {
				signal = new $.Signal();

				configure() {
					setInterval(() => {
						this.signal.emit("updated", "Hello world");
					}, 500);
				}
			}`);
			flow.AddTemplate('receiver', TemplateScope.Node, null);
			await flow.templates.find(t => t.id === 'receiver').UpdateCode(`
			class extends $.Node {
				slot = new $.Slot();

				configure() {
					this.slot.on("updated", (from, to) => {
						console.log(from);
					})
				}
			}`);
			flow.CreateLayer('default');
			flow.Layer('default').CreateNode('uuid1', 'sender');
			flow.Layer('default').Node('uuid1').configure(null);

			flow.Layer('default').CreateNode('uuid2', 'receiver');
			flow.Layer('default').Node('uuid2').configure(null);

			flow.Layer('default').AddConnection('uuid0', {node: 'uuid1', signal: 'signal'}, {node: 'uuid2', slot: 'slot'});

			await new Promise((r) => setTimeout(r, 5000));
			
			//expect('Hello World!').toBe('Hello World!');
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