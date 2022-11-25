import { Injectable, Scope } from "@nestjs/common";
import EventEmitter from "events";
import { Message } from "../entities/Message";

@Injectable({ scope: Scope.TRANSIENT })
export class MessagingService extends EventEmitter {
    constructor() {
        super();
    }

    public From(node: string, output: string, callback: any): void {
        this.on(node, (message: Message) => { if (message.sender.output === output) callback(message) });
    }
}