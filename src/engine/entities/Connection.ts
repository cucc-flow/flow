import { NodeRepository } from "../repositories/NodeRepository";
import { MessagingService } from "../services/MessagingService";
import { IReceiver, ISender, Message } from "./Message";
import { Node } from "./Node";

export class Connection {
    private targetNode: Node;

    constructor(
        public readonly id: string,
        private readonly messagingService: MessagingService,
        private readonly nodeRepository: NodeRepository,
        private readonly from: ISender,
        private readonly to: IReceiver,
    ) {
        this.targetNode = nodeRepository.FindById(to.node);

        messagingService.From(from.node, from.signal, (message) => {
            let copy: Message = JSON.parse(JSON.stringify(message));
            copy.receiver.node = this.to.node;
            copy.receiver.slot = this.to.slot;
            this.targetNode.ReceiveMessage(copy);
        })
    }
}