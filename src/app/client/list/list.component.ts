import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data';
import { Subscription } from 'rxjs';

import { EmmlibService } from 'emmlib';

import { Client } from '../models/client';

@Component({
  selector: 'client-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public Items: Array<Client>;
  private _sub: Subscription;

  constructor(private core: EmmlibService, private data: DataService) { 
    this.Items = new Array<Client>();
  }

  LoadList() {
    this._sub = this.data.GetList("/member/items").subscribe(snapshots => {
      this.Items = this.data.GetItems<Client>(snapshots);
      this._sub.unsubscribe();
    });
  }

  Update() {
    let item = new Client();
    
    if(this.Items.length > 0)
      item = this.Items[0];
    else {
      item.Email = "emmanuel.salunga@gmail.com"
    }
    item.Name = "Emmanuel Salunga " + this.core.Stamp.Timestamp;

    this.data.Save("/member/items", item);

  }

  ngOnInit() {
  }

}
