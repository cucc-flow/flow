import { Layer } from "../entities/Layer";

export class Node {
    constructor(
        public readonly id: string,
        protected readonly layer: Layer
    ) {
    }

    configure(configuration: any) {
        console.log(`Configure ${this.id}`);
    }
}