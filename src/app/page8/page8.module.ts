import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page8PageRoutingModule } from './page8-routing.module';

import { Page8Page } from './page8.page';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page8PageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Page8Page]
})
export class Page8PageModule {}
