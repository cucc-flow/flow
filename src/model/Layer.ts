import { TemplateService } from "../services/TemplateService";
import { ILayer } from "../interfaces/ILayer";
import { Connection } from "./Connection";

export class Layer {
    private nodes: Node[] = [];
    private connections: Connection[] = [];

    public constructor (
        private templateService: TemplateService,
        public schema: ILayer,
    ) {
    }

    public UpdateSchema(schema: ILayer): void {

    }
}