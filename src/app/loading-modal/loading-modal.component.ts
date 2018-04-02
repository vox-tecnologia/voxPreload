import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoadingService } from '../shared/services/loading.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-loading-modal',
    templateUrl: './loading-modal.component.html',
    styleUrls: ['./loading-modal.component.css']
})

export class LoadingModalComponent implements OnInit, OnDestroy {
  @ViewChild('content') private content: ElementRef;
    public show: boolean;
    private subscription: Subscription;
    public modalRef: NgbModalRef;

    constructor(
      private loadingService: LoadingService,
      private modalService: NgbModal,
      ) {
        this.show = false;
        this.loadingService = loadingService;
        this.modalService = modalService;
    }

    ngOnInit(): void {
        this.subscription = this.loadingService.loaderModalState
            .subscribe(state => {
              if (state.show) {
                this.modalRef = this.modalService.open(this.content);
                return;
              }
              this.modalRef.close();
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
