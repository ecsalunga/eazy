import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data';

@Component({
  selector: 'user-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  constructor(public data: DataService) { }

  public Login() {
    this.data.LogInWithFacebook();
  }

  public LogOut() {
    this.data.LogOut();
  }

  ngOnInit() {
  }

}
