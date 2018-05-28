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
  @ViewChild('content') private content: ElementRef;
  private subscription: Subscription;
  modalOptions: NgbModalOptions;

  public show: boolean;
  public modalRef: NgbModalRef;
  public textModal: string;

  constructor(
    private loadingModalService: LoadingModalService,
    private modalService: NgbModal
  ) {
    this.show = false;
    this.modalOptions = {};
  }

  ngOnInit(): void {
    this.subscription = this.loadingModalService.loaderState.subscribe(
      state => {
        if (state.show) {
          this.textModal = state.text;
          this.modalOptions.backdrop = 'static';
          this.modalOptions.keyboard = false;
          this.modalRef = this.modalService.open(this.content, this.modalOptions);
          return;
        }
        this.modalRef.close();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
