import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page6PageRoutingModule } from './page6-routing.module';

import { Page6Page } from './page6.page';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page6PageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Page6Page]
})
export class Page6PageModule {}
