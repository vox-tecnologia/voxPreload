import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingInputComponent } from './loading-input.component';
import { LoadingInputService } from './loading-input.service';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingInputComponent],
  exports: [LoadingInputComponent],
  providers: [LoadingInputService]
})
export class LoadingInputModule {}
