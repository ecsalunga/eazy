import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { EmmlibModule } from 'emmlib';

import { Setting } from './setting';
import { DataService } from './data.service';

@NgModule({
  imports: [
    CommonModule, EmmlibModule,
    AngularFireModule.initializeApp(Setting.firebase), AngularFireAuthModule, AngularFireDatabaseModule
  ],
  declarations: [],
  providers: [ DataService ]
})
export class DataModule { }
