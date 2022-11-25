import { Injectable, Scope } from "@nestjs/common";
import { Node } from "../entities/Node";

@Injectable({ scope: Scope.TRANSIENT })
export class NodeRepository {
    private nodes: Node[];

    public Add(node: Node): void {
        this.nodes.push(node);
    }

    public FindById(id: string): Node {
        return this.nodes.find(node => node.id === id);
    }
}