import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page10PageRoutingModule } from './page10-routing.module';

import { Page10Page } from './page10.page';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page10PageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Page10Page]
})
export class Page10PageModule {}
