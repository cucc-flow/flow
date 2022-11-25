export interface ISender {
    node: string;
    signal: string;
}

export interface IReceiver {
    node: string;
    slot: string;
}

export class Message {
    public readonly id: string;

    constructor (
        public readonly sender: ISender,
        public readonly receiver: IReceiver,
        public readonly data: any,
    ) {
        this.id = ""; // TODO rand
    }
}