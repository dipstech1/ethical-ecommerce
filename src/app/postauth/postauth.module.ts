import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostauthRoutingModule } from './postauth-routing.module';
import { PostAuthComponent } from './post-auth.component';


@NgModule({
  declarations: [PostAuthComponent],
  imports: [
    CommonModule,
    PostauthRoutingModule
  ]
})
export class PostauthModule { }
