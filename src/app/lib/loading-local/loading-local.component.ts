import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { LoadingLocalService } from './loading-local.service';

@Component({
  selector: 'vox-loading-local',
  templateUrl: './loading-local.component.html',
  styleUrls: ['./loading-local.component.css']
})
export class LoadingLocalComponent implements OnInit, OnDestroy {

  @Input() public name: string;
  public show: boolean;
  private _subscription: Subscription;

  constructor(private loadingLocalService: LoadingLocalService) {
    this.show = false;
  }

  ngOnInit(): void {
    this._subscription = this.loadingLocalService.loaderState.subscribe(
      (state) => this.show = this.checaNome(state) ? state.show : this.show
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private checaNome(state) {
    return this.name === state.name;
  }
}
