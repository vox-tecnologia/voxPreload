import { Component } from '@angular/core';
// call the services that you need
import { LoadingGlobalService } from '../src/app/loading-global/loading-global.service';
import { LoadingModalService } from '../src/app/loading-modal/loading-modal.service';
import { LoadingInputService } from '../src/app/loading-input/loading-input.service';

@Component({
  selector: 'vox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public constructor(
    private loadingGlobalService: LoadingGlobalService,
    private loadingModalService: LoadingModalService,
    private loadingInputService: LoadingInputService
  ) {}

  // this would be the "get" method in your service
  public global() {
    // call "show" at the begining
    this.loadingGlobalService.show();
    setTimeout(() => {
      // this simulate the response, call hide when its finishes
      this.loadingGlobalService.hide();
    }, 1500);
  }

  public modal() {
    // "modal" and "input" receive an optional text entry to describe whats is loading
    this.loadingModalService.show('optional text');
    setTimeout(() => {
      this.loadingModalService.hide();
    }, 1500);
  }

  public campoSucesso() {
    this.loadingInputService.show('optional text');
    setTimeout(() => {
      // "input" receive an mandatory argument "status" to specify if the request was an success or an failure
      // also receives an optional success or error message
      this.loadingInputService.hide('success', {success: 'optional success text'});
    }, 1500);
  }

  public campoErro() {
    this.loadingInputService.show();
    setTimeout(() => {
      this.loadingInputService.hide('error', {error: 'optional error text'});
    }, 1500);
  }
}
