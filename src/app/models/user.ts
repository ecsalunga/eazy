import { Item } from './item';

export class User extends Item {
    UID: string;
    Name: string;
    Email: string;
    ImageUrl: string;
    Address: string;
    Contact1: string;
    Contact2: string;
    JoinDate: number;
    ActionDate: number;
    TypeId: number;
}