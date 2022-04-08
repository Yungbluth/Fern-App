import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page11PageRoutingModule } from './page11-routing.module';

import { Page11Page } from './page11.page';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page11PageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Page11Page]
})
export class Page11PageModule {}
