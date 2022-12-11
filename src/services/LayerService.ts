import { BadRequestException, Injectable } from '@nestjs/common';
import { ILayer } from '../interfaces/ILayer';
import { Layer } from '../model/Layer';
import { ConfigurationService } from './ConfigurationService';
import { TemplateService } from './TemplateService';

@Injectable()
export class LayerService {
    private layers: Layer[] = [];

	constructor(
        private configurationService: ConfigurationService,
        private templateService: TemplateService,
    ) {
        // TODO init
	}

    public FindById(id: string): Layer {
        return this.layers.find(layer => layer.schema.id === id);
    }

    public Create(schema: ILayer): ILayer {
        schema.id = "uuid2" // TODO generate
        let layer = new Layer(this.templateService, schema);
        this.layers.push(layer);
        return layer.schema;
    }

    public Update(schema: ILayer): ILayer {
        let existing = this.FindById(schema.id);
        if (!existing) throw new BadRequestException();

        existing.UpdateSchema(schema);
        return existing.schema;
    }

    public Remove(id: string): void {
        let existing = this.FindById(id);
        if (!existing) return;
        // Todo remove
    }
}

export class Node {
    public constructor(
        protected readonly layer: Layer,
        protected readonly id: string
    ) {}

    public Initialize(configuration: any) {

    }

    public Dispose() {

    }
}

export class Subflow extends Node {

}