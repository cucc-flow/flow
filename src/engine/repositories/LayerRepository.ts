import { Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { Layer } from "../entities/Layer";

@Injectable()
export class LayerRepository {
    private layers: Layer[];

    constructor(
        private moduleRef: ModuleRef
    ) {}

    public async CreateLayer(id: string) {
        let layer: Layer = await this.moduleRef.resolve(Layer);
        this.layers.push(layer);
    }

    public FindById(id: string): Layer {
        return this.layers.find(layer => layer.id === id);
    }
}