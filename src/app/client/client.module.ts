import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatBadgeModule } from '@angular/material';

import { EmmlibModule } from 'emmlib';
import { DataModule } from '../data';

import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    EmmlibModule,
    MatButtonModule, MatBadgeModule,
    DataModule
  ],
  declarations: [ ListComponent ],
  entryComponents: [ ListComponent ]
})
export class ClientModule { }
