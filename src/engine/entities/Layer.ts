import { Injectable, Scope } from "@nestjs/common";
import { ConnectionRepository } from "../repositories/ConnectionRepository";
import { NodeRepository } from "../repositories/NodeRepository";
import { TemplateRepository } from "../repositories/TemplateRepository";
import { MessagingService } from "../services/MessagingService";
import { Connection } from "./Connection";
import { Node } from "./Node";
import { Template } from "./Template";

@Injectable({ scope: Scope.TRANSIENT })
export class Layer {
    public id: string;

    constructor(
        private templateRepository: TemplateRepository,
        private nodeRepository: NodeRepository,
        private connectionRepository: ConnectionRepository,
        private messagingService: MessagingService
    ) {}

    public AddConnection(connection: Connection): void {
        this.connectionRepository.Add(connection);
    }

    public CreateNode(id: string, templateId: string, configuration: any): void {
        let node: Node;// = new Node(id);
        let template: Template = this.templateRepository.FindById(templateId);
        this.nodeRepository.Add(node);
    }
}