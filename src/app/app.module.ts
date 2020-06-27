import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SharedModule} from '../app/shared/shared.module'
import {CoreModule} from '../app/core/core.module'

import {PendingChangesGuard} from '../app/core/guards/deactivate.guard'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule.forRoot(),
  ],
  providers: [
    PendingChangesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
