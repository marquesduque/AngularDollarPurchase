import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { purchaseService } from '../purchase.service';
import { LIST_ROUTES } from './list.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(LIST_ROUTES)
  ],
  declarations: [
  ],
  providers: [purchaseService],
  exports: []
})
export class listModule { }
