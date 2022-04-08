import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page1PageRoutingModule } from './page1-routing.module';

import { Page1Page } from './page1.page';

import { IonicStorageModule } from '@ionic/storage-angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page1PageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Page1Page]
})
export class Page1PageModule {}
