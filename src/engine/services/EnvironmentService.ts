import { Injectable } from "@nestjs/common";

@Injectable()
export class EnvironmentService {
    private _environment: {[key:string]: any} = {};
    public get environment() {
        return this._environment;
    }

    public RegisterType(name: string, type: any): void {
        this._environment[name] = type;
    }
}