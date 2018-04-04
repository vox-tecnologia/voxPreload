import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoadingGlobalService } from './loading-global.service';

@Component({
  selector: 'vox-loading-global',
  templateUrl: './loading-global.component.html',
  styleUrls: ['./loading-global.component.css']
})
export class LoadingGlobalComponent implements OnInit, OnDestroy {
  public show: boolean;
  private subscription: Subscription;

  constructor(private loadingGlobalService: LoadingGlobalService) {
    this.show = false;
  }

  ngOnInit(): void {
    this.subscription = this.loadingGlobalService.loaderState.subscribe(
      state => (this.show = state.show)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
