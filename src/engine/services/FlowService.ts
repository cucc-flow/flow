import { Injectable } from "@nestjs/common";
import { LayerRepository } from "../repositories/LayerRepository";
import { TemplateRepository } from "../repositories/TemplateRepository";

@Injectable()
export class FlowService {
    constructor(
        private templateRepository: TemplateRepository,
        private layerRepository: LayerRepository
    ){}
}