import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoadingService } from '../shared/services/loading.service';

@Component({
    selector: 'app-loading-global',
    templateUrl: './loading-global.component.html',
    styleUrls: ['./loading-global.component.css']
})

export class LoadingGlobalComponent implements OnInit, OnDestroy {
    public show: boolean;
    private subscription: Subscription;
    private loadingService: LoadingService;

    constructor(loadingService: LoadingService) {
        this.show = false;
        this.loadingService = loadingService;
    }

    ngOnInit(): void {
        this.subscription = this.loadingService.loaderGlobalState
            .subscribe(state => this.show = state.show);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
