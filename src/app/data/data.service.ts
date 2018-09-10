import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { EmmlibService } from 'emmlib';

import { Config, Update, State, User } from '../models';

@Injectable()
export class DataService {
  public OnUpdate: Observable<Update>;
  private _updater: Subject<Update>;

  public IsLoginSubscribed: boolean = false;
  public State: State;

  constructor(private core: EmmlibService, private fireDB: AngularFireDatabase, private fireAuth: AngularFireAuth) {
    this._updater = new Subject<Update>();
    this.OnUpdate = this._updater.asObservable();
  }

  public Publish(update: Update) {
    if(this._updater != null)
        this._updater.next(update);
  }

  public GetList(path: string, orderBy: string = "stamp"): Observable<any> {
    return this.fireDB.list(path, ref => { return ref.orderByChild(orderBy); }).snapshotChanges();
  }

  public GetItems<T>(snapshots: any): Array<T> {
    let items = new Array<T>();

    snapshots.forEach(snapshot => {
      let info: any = snapshot.payload.val();
      info.key = snapshot.key;
      items.push(info);
    });

    return items;
  }

  public SaveList(path: string, item: any) {
    if(item.key != null)
      this.fireDB.object(path + '/' + item.key).update(item);
    else
      this.fireDB.list(path).push(item);
  }

  public LogInWithFacebook() {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  public LogOut() {
    this.fireAuth.auth.signOut();
    this.Publish(new Update(Config.UpdateTypes.LogOut));
  }

  public Init() {
    this.State = new State();

    this.GetList("/user/items").subscribe(snapshots => {
      this.State.Users = this.GetItems<User>(snapshots);
      this.pickUser();

      if(!this.IsLoginSubscribed)
        this.subscribeToLogin();
    });
  }

  private subscribeToLogin() {
    this.IsLoginSubscribed = true;
    this.fireAuth.authState.subscribe(user => {
      this.State.FBUser = user;
      if(user != null) {
        this.State.IsLogin = true;
        this.Publish(new Update(Config.UpdateTypes.LogIn, user));
      } 
      else {
        this.State.IsLogin = false;
        this.Publish(new Update(Config.UpdateTypes.LogOut));
      }

      this.pickUser();
    });
  }

  private pickUser() {
    let user = new User();

    if(this.State.IsLogin) {
      this.State.Users.forEach(item => {
        if(this.State.FBUser.uid == item.UID)
          user = item;
      });

      if(user.UID == null) {
        user.UID = this.State.FBUser.uid;
        user.Name = this.State.FBUser.displayName;
        user.Email = this.State.FBUser.email;
        user.ImageUrl = Config.DefaultPhoto;
        user.Contact1 = this.State.FBUser.phoneNumber;
        user.JoinDate = this.core.Stamp.Timestamp;
        user.ActionDate = this.core.Stamp.Timestamp;
        user.TypeId = Config.UserTypes.Guest;
        this.SaveList("/user/items", user);
      }
    }

    this.State.User = user;
  }
}
