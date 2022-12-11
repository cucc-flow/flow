import { Node } from "../environment/Node";

export interface ISender {
    node: string;
    signal: string;
}

export interface IReceiver {
    node: string;
    slot: string;
}

export class Connection {
    private source: Node;
    private destination: Node;

    constructor(
        public readonly id: string,
        private readonly nodeRepository: Node[],
        private readonly from: ISender,
        private readonly to: IReceiver,
    ) {
        this.destination = nodeRepository.find(node => node.id === to.node);
        this.source = nodeRepository.find(node => node.id === from.node);

        this.source[from.signal].on("updated", (data) => {
            this.destination[to.slot].Update(data);
        });
    }
}