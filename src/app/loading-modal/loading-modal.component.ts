import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { LoadingModalService } from './loading-modal.service';

@Component({
  selector: 'vox-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.css']
})
export class LoadingModalComponent implements OnInit, OnDestroy {
  @ViewChild('content') private content: ElementRef;
  public show: boolean;
  private subscription: Subscription;
  public modalRef: NgbModalRef;
  public textModal: string;

  constructor(
    private loadingModalService: LoadingModalService,
    private modalService: NgbModal
  ) {
    this.show = false;
  }

  ngOnInit(): void {
    this.subscription = this.loadingModalService.loaderState.subscribe(
      state => {
        if (state.show) {
          this.textModal = state.text;
          this.modalRef = this.modalService.open(this.content);
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
