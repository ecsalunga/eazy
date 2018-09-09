import { Component } from '@angular/core';
import { EmmlibService } from 'emmlib';
import { DataService } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private core: EmmlibService, private data: DataService) {
    this.data.Init();
  }

  public TestLoder() {
    
    this.core.Load("client-list");
  }
}
