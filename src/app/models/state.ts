import * as firebase from 'firebase/app';

import { User } from './user';

export class State {
    FBUser: firebase.User;
    User: User;
    Users: Array<User>;
    IsLogin: boolean;
    Title: string = "Home";

    constructor() {
        this.IsLogin = false;
        this.User = new User();
        this.Users = new Array<User>();
    }
}