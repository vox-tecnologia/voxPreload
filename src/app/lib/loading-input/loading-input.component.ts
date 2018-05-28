import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoadingInputService } from './loading-input.service';
import { InputPropertiesInterface } from './input-properties-interface';

@Component({
  selector: 'vox-loading-input',
  templateUrl: './loading-input.component.html',
  styleUrls: ['./loading-input.component.css']
})
export class LoadingInputComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  private _properties: InputPropertiesInterface;

  @Input() public name: string;
  public show: boolean;

  constructor(private loadingInputService: LoadingInputService) {
    this.show = false;
  }

  ngOnInit(): void {
    this._subscription = this.loadingInputService.loaderState.subscribe(
      (state) => {
        this.show = this.checaNome(state) ? state.show : this.show;
        this.properties.textLoading = state.textMessage;
        if (!this.show && this.checaNome(state)) {
          this.properties.status = state.status;
          this.properties.textSuccess = state.text.success;
          this.properties.textError = state.text.error;
          this.properties.resultError = this.properties.status === 'error' ? true : false;
          this.properties.resultSuccess = this.properties.status === 'success' ? true : false;
          setTimeout(() => {
            this.properties.resultError = false;
            this.properties.resultSuccess = false;
          }, 3000);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public get properties(): InputPropertiesInterface {
    return this._properties;
  }

  private checaNome(state) {
    return this.name === state.name;
  }
}
