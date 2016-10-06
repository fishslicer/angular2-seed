import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { PrivateComponent } from './private.component';


@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [PrivateComponent],
  exports: [PrivateComponent],
  providers: []
})
export class PrivateModule { }
