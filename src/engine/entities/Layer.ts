import { Flow } from "../Flow";
import { Connection, IReceiver, ISender } from "./Connection";
import { Node } from "../environment/Node";
import { Template } from "./Template";

export class Layer {
    public readonly connections: Connection[] = [];
    public readonly nodes: Node[] = [];

    constructor(
        private readonly flow: Flow,
        public readonly id: string
    ) {}

    public AddConnection(id: string, from: ISender, to: IReceiver): void {
        this.connections.push(new Connection(id, this.nodes, from, to));
    }

    public CreateNode(id: string, templateId: string): void {
        let template: Template = this.flow.templates.find(t => t.id === templateId);
        let node: Node = new template.type(id, this);
        if (node.id === id) {
            this.nodes.push(node);
        } else {
            console.log("Invalid operation");
        }
    }

    public Node(id: string) {
        return this.nodes.find(node => node.id === id);
    }
}