import { Message } from "./Message";
import { Template } from "./Template";

export class Node {
    constructor(
        public readonly id: string,
        private readonly template: Template
    ) {}

    public Configure(configuration: any) {
        // TODO recreate
    }

    public ReceiveMessage(message: Message) {
        // TODO find Slot on this instance
    }
}