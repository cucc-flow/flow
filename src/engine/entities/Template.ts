import { EventEmitter } from "events";
import { Environment } from "../Environment";

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
        private readonly environmentService: Environment,
        public readonly id: string,
        public readonly scope: TemplateScope,
        private _code: string
    ) {
        super();
        //this.UpdateCode(_code);
    }

    public async UpdateCode(code: string) {
        let $ = this.environmentService.environment;
        const dataUri = 'data:text/javascript;charset=utf-8,' + encodeURIComponent(code);
        await import(dataUri)
            .then((imported) => {
                this._type = imported.Node;
                this._code = code;
                this.emit('updated');
            })
            .catch(e => console.log(e));

        //this._type = eval(`(${code})`);
    }
}

/*
const js = `
let e = require("events")
export class Node {}
`;
const dataUri = 'data:text/javascript;charset=utf-8,'
  + encodeURIComponent(js);
import(dataUri)
  .then((namespaceObject) => {
    console.log(namespaceObject);
  })
  .catch(e => console.log(e));
*/