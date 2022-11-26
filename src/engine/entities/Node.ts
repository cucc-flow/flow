import { Message } from "./Message";
import { Template } from "./Template";

export class Node {
    private _instance = null;
    public get isRunning() {
        return this._instance !== null;
    }

    constructor(
        public readonly id: string,
        private readonly template: Template
    ) {}

    public Configure(configuration: any) {
        try {
            this._instance = new this.template.type();
        } catch(e) {
            console.log("runtime", e);
        }
        // TODO recreate
    }

    public ReceiveMessage(message: Message) {
        // TODO find Slot on this instance
    }
}