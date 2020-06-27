import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreauthRoutingModule } from './preauth-routing.module';
import { PreauthComponent } from './preauth.component';


@NgModule({
  declarations: [PreauthComponent],
  imports: [
    CommonModule,
    PreauthRoutingModule,
  ]
})
export class PreauthModule { }
