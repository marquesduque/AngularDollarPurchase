import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { purchase_ROUTES } from './purchase.routes';
import { appService } from '../app.service';
import { purchaseService } from './purchase.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(purchase_ROUTES)
  ],
  declarations: [
  ],
  providers: [appService, purchaseService],
  exports: []
})
export class purchaseModule { }
