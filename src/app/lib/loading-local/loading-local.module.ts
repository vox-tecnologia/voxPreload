import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingLocalService } from './loading-local.service';
import { LoadingLocalComponent } from './loading-local.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ LoadingLocalComponent ],
  providers: [ LoadingLocalService ],
  exports: [ LoadingLocalComponent ]
})
export class LoadingLocalModule { }
