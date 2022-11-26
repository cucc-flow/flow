import { Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { Template, TemplateScope } from "../entities/Template";
import { EnvironmentService } from "../services/EnvironmentService";

@Injectable()
export class TemplateRepository {
    private templates: Template[] = [];

    constructor(
        private environmentService: EnvironmentService
    ) {}
    
    public Add(id: string, scope: TemplateScope, code: string): void {
        this.templates.push(new Template(this.environmentService, id, scope, code));
    }

    public FindById(id: string): Template {
        return this.templates.find(template => template.id === id);
    }
}