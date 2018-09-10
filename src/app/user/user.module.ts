import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule, MatPaginatorModule } from '@angular/material';

import { ListComponent } from './list/list.component';
import { WidgetComponent } from './widget/widget.component';

import { DataModule } from '../data';

@NgModule({
  imports: [
    CommonModule, MatTableModule, MatPaginatorModule,
    DataModule
  ],
  declarations: [ListComponent, WidgetComponent],
  exports:[WidgetComponent],
  entryComponents:[ListComponent]
})
export class UserModule { }
