import { EventEmitter } from "events";
import { EnvironmentService } from "../services/EnvironmentService";

export enum TemplateScope {
    Node,
    Service
}

export class Template extends EventEmitter {  
    private _type: any;

    public get code() {
        return this._code;
    }

    public get type() {
        return this._type;
    }

    constructor (
        private readonly environmentService: EnvironmentService,
        public readonly id: string,
        public readonly scope: TemplateScope,
        private _code: string
    ) {
        super();
        this.UpdateCode(_code);
    }

    public UpdateCode(code: string) {
        try {
            let $ = this.environmentService.environment;
            this._type = eval(`(${code})`);
        } catch(e) {
            console.log("syntax", e);
        }
        
        this._code = code;
        this.emit('updated');
    }
}