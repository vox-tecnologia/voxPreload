import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoadingGlobalModule } from './loading-global/loading-global.module';
import { LoadingModalModule } from './loading-modal/loading-modal.module';
import { LoadingInputModule } from './loading-input/loading-input.module';
import { LoadingService } from './shared/services/loading.service';
import { HttpClientModule } from '@angular/common/http';

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
