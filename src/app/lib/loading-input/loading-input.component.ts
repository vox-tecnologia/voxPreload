import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoadingInputService } from './loading-input.service';
import { InputProperties } from './input-properties';
import { StatusEnum } from './status-enum';

@Component({
  selector: 'vox-loading-input',
  templateUrl: './loading-input.component.html',
  styleUrls: ['./loading-input.component.css']
})
export class LoadingInputComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  private _properties: InputProperties;

  @Input() public name: string;
  public show: boolean;

  constructor(private loadingInputService: LoadingInputService) {
    this.show = false;
    this._properties = new InputProperties();
  }

  ngOnInit(): void {
    this._subscription = this.loadingInputService.loaderState.subscribe(
      (state) => {
        this.show = this.checaNome(state) ? state.show : this.show;
        this._properties.textLoading = state.textMessage;

        if (!this.show && this.checaNome(state)) {
          this.setProperties(state);
          setTimeout(() => {
            this._properties.resultError = false;
            this._properties.resultSuccess = false;
          }, 3000);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public get properties(): InputProperties {
    return this._properties;
  }

  private checaNome(state) {
    return this.name === state.name;
  }

  private setProperties(state) {
    if (state.text) {
      this._properties.textSuccess = state.text.success;
      this._properties.textError = state.text.error;
    }
    this._properties.resultError = state.status === StatusEnum.ERROR ? true : false;
    this._properties.resultSuccess = state.status === StatusEnum.SUCCESS ? true : false;
  }
}
