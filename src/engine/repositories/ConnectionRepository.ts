import { Injectable, Scope } from "@nestjs/common";
import { Connection } from "../entities/Connection";

@Injectable({ scope: Scope.TRANSIENT })
export class ConnectionRepository {
    private connections: Connection[];

    public Add(connection: Connection): void {
        this.connections.push(connection);
    }
}