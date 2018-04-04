import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// call the modules that you need
import { LoadingGlobalModule } from '../src/app/loading-global/loading-global.module';
import { LoadingModalModule } from '../src/app/loading-modal/loading-modal.module';
import { LoadingInputModule } from '../src/app/loading-input/loading-input.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoadingGlobalModule,
    LoadingModalModule,
    LoadingInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
