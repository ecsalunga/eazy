import { Component } from '@angular/core';
import { EmmlibService } from 'emmlib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private core: EmmlibService) {

  }

  public TestLoder() {
    this.core.Load("article-list");
  }
}
