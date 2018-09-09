import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private fireDB: AngularFireDatabase) { }

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
}
