import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page13PageRoutingModule } from './page13-routing.module';

import { Page13Page } from './page13.page';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page13PageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Page13Page]
})
export class Page13PageModule {}
