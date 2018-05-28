import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { LoadingModalService } from './loading-modal.service';

@Component({
  selector: 'vox-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.css']
})
export class LoadingModalComponent implements OnInit, OnDestroy {
  @ViewChild('content') private _content: ElementRef;
  private _subscription: Subscription;
  private _modalOptions: NgbModalOptions;
  private _modalRef: NgbModalRef;

  public show: boolean;
  public textModal: string;
  public title: string;

  constructor(
    private loadingModalService: LoadingModalService,
    private modalService: NgbModal
  ) {
    this.show = false;
    this._modalOptions = {};
  }

  ngOnInit(): void {
    this._subscription = this.loadingModalService.loaderState.subscribe(
      state => {
        if (state.show) {
          this.textModal = state.content.message;
          this.title = state.content.title;
          this._modalOptions.backdrop = 'static';
          this._modalOptions.keyboard = false;
          this._modalRef = this.modalService.open(this._content, this._modalOptions);
          return;
        }
        this._modalRef.close();
      }
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
