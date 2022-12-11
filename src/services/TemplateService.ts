import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigurationService } from './ConfigurationService';

@Injectable()
export class TemplateService {
    private templates: Template[] = [];

	constructor(
        private readonly configurationService: ConfigurationService
    ) {
        // Init from config
	}

    public FindById(id: string): Template {
        return this.templates.find(template => template.schema.id === id);
    }

    public Create(schema: ITemplate): ITemplate {
        schema.id = "uuid"; // todo generate random id
        let template = new Template(schema);
        this.templates.push(template);
        return template.schema;
    }

    public Update(schema: ITemplate): ITemplate {
        let existing = this.FindById(schema.id);
        if (!existing) throw new BadRequestException();
        existing.UpdateSchema(schema);
        return existing.schema;
    }

    public Remove(id: string): void {
        let existing = this.FindById(id);
        if (!existing) return;

        // TODO remove
    }
}

export interface ITemplate {
    id: string;
	name: string;
	category: string;
	type: 'node' | 'service' | 'plugin';
	backend: string;
	frontend: string;
	template: string;
}

export class Template {
    public constructor(
        public schema: ITemplate
    ) {}

    public UpdateSchema(schema: ITemplate): void {

    }
}