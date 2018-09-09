export class Update {
    Type: string;
    Data: any;

    constructor(type: string, data?: any) {
        this.Type = type;
        this.Data = data;
    }
}