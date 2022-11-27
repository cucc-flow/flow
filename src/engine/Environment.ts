
export class Environment {
    private _environment: {[key:string]: any} = {};
    public get environment() {
        return this._environment;
    }

    public RegisterType(name: string, type: any): void {
        this._environment[name] = type;
    }
}