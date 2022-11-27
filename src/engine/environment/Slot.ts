import { EventEmitter } from "events";

export class Slot extends EventEmitter {
    constructor() {
        super();
    }

    public Update(data) {
        this.emit("updated", data);
    }
}