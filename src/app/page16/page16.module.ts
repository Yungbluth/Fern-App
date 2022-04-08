import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page16PageRoutingModule } from './page16-routing.module';

import { Page16Page } from './page16.page';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page16PageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Page16Page]
})
export class Page16PageModule {}
