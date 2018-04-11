import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingGlobalComponent } from './loading-global.component';
import { LoadingGlobalService } from './loading-global.service';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingGlobalComponent],
  exports: [LoadingGlobalComponent],
  providers: [LoadingGlobalService]
})
export class LoadingGlobalModule {}
