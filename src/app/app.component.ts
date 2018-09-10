import { Component } from '@angular/core';
import { EmmlibService, Delay } from 'emmlib';
import { DataService } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private core: EmmlibService, public data: DataService) {
    this.data.Init();
    this.init();
  }

  public TestLoder() {
    this.core.Load("user-list");
  }

  @Delay(500)
  private init() {
    this.core.Load("client-list");
  }
}