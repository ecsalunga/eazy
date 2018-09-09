import { Component, OnInit } from '@angular/core';

import { EmmlibService } from 'emmlib';

@Component({
  selector: 'client-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private core: EmmlibService) { 

  }

  ngOnInit() {
  }
}