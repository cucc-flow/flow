import { Injectable } from "@nestjs/common";
import { Node } from "../environment/Node";
import { Signal } from "../environment/Signal";
import { Slot } from "../environment/Slot";
import { LayerRepository } from "../repositories/LayerRepository";
import { TemplateRepository } from "../repositories/TemplateRepository";
import { EnvironmentService } from "./EnvironmentService";

@Injectable()
export class FlowService {
    constructor(
        public templateRepository: TemplateRepository,
        public layerRepository: LayerRepository,
        private environmentService: EnvironmentService
    ){
        environmentService.RegisterType("Node", Node);
        environmentService.RegisterType("Signal", Signal);
        environmentService.RegisterType("Slot", Slot);
    }
}