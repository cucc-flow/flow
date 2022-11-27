import { Layer } from "./entities/Layer";
import { Node } from "./environment/Node";
import { Signal } from "./environment/Signal";
import { Slot } from "./environment/Slot";
import { Environment } from "./Environment";
import { Template, TemplateScope } from "./entities/Template";

export class Flow {
    public readonly environment = new Environment();
    public readonly templates: Template[] = [];
    public readonly layers: Layer[] = [];

    constructor(
    ){
        this.environment.RegisterType("Node", Node);
        this.environment.RegisterType("Signal", Signal);
        this.environment.RegisterType("Slot", Slot);
    }

    public AddTemplate(id: string, scope: TemplateScope, code: string): void {
        this.templates.push(new Template(this.environment, id, scope, code));
    }

    public CreateLayer(id: string) {
        this.layers.push(new Layer(this, id))
    }

    public Layer(id: string) {
        return this.layers.find(layer => layer.id === id);
    }
}