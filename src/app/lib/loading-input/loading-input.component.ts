import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoadingInputService } from './loading-input.service';

@Component({
  selector: 'vox-loading-input',
  templateUrl: './loading-input.component.html',
  styleUrls: ['./loading-input.component.css']
})
export class LoadingInputComponent implements OnInit, OnDestroy {
  public show: boolean;
  private subscription: Subscription;
  public textLoading: string;
  public textSuccess: string;
  public textError: string;
  public resultError: boolean;
  public resultSuccess: boolean;
  private status: string;

  constructor(private loadingInputService: LoadingInputService) {
    this.show = false;
  }

  ngOnInit(): void {
    this.subscription = this.loadingInputService.loaderState.subscribe(
      state => {
        this.show = state.show;
        this.textLoading = state.textMessage;
        if (!this.show) {
          this.status = state.status;
          this.textSuccess = state.text.success;
          this.textError = state.text.error;
          this.resultError = this.status === 'error' ? true : false;
          this.resultSuccess = this.status === 'success' ? true : false;
          setTimeout(() => {
            this.resultError = false;
            this.resultSuccess = false;
          }, 3000);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
