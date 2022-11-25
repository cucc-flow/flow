import { Injectable } from "@nestjs/common";
import { Template } from "../entities/Template";

@Injectable()
export class TemplateRepository {
    private templates: Template[];
    
    public Add(template: Template): void {
        this.templates.push(template);
    }

    public FindById(id: string): Template {
        return this.templates.find(template => template.id === id);
    }
}