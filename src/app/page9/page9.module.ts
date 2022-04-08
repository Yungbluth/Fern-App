import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page9PageRoutingModule } from './page9-routing.module';

import { Page9Page } from './page9.page';

import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page9PageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [Page9Page]
})
export class Page9PageModule {}