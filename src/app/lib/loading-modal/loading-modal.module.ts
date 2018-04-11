import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { LoadingModalComponent } from './loading-modal.component';
import { LoadingModalService } from './loading-modal.service';

@NgModule({
  imports: [CommonModule, NgbModule, NgbModalModule.forRoot()],
  declarations: [LoadingModalComponent],
  exports: [LoadingModalComponent],
  providers: [LoadingModalService]
})
export class LoadingModalModule {}
