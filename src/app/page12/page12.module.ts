import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page12PageRoutingModule } from './page12-routing.module';

import { Page12Page } from './page12.page';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page12PageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Page12Page]
})
export class Page12PageModule {}
