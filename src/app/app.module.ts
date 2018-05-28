import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {
  LoadingGlobalModule,
  LoadingInputModule,
  LoadingModalModule
} from '@vox-loading';

import { HttpClientModule } from '@angular/common/http';
import { LoadingLocalComponent } from './lib/loading-local/loading-local.component';
@NgModule({
  declarations: [AppComponent, LoadingLocalComponent],
  imports: [
    BrowserModule,
    LoadingGlobalModule,
    LoadingModalModule,
    LoadingInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
