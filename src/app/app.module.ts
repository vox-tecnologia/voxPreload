import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {
  LoadingGlobalModule,
  LoadingInputModule,
  LoadingModalModule,
  LoadingLocalModule
} from '@vox-loading';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoadingGlobalModule,
    LoadingModalModule,
    LoadingInputModule,
    LoadingLocalModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
