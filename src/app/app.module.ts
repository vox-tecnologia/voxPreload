import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoadingGlobalComponent } from './loading-global/loading-global.component';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { LoadingCampoComponent } from './loading-campo/loading-campo.component';
import { LoadingService } from './shared/services/loading.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoadingGlobalComponent,
    LoadingModalComponent,
    LoadingCampoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule.forRoot()
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
