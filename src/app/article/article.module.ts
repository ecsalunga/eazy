import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatBadgeModule } from '@angular/material';

import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatBadgeModule
  ],
  declarations: [ ListComponent ],
  entryComponents: [ ListComponent ]
})
export class ArticleModule { }
