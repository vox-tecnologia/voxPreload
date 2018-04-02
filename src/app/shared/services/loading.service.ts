import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingService {

    private loaderGlobalSubject: Subject<any>;
    private loaderModalSubject: Subject<any>;
    private loaderCampoSubject: Subject<any>;
    public loaderGlobalState: any;
    public loaderModalState: any;
    public loaderCampoState: any;

    constructor() {
        this.loaderGlobalSubject = new Subject();
        this.loaderModalSubject = new Subject();
        this.loaderCampoSubject = new Subject();
        this.loaderGlobalState = this.loaderGlobalSubject.asObservable();
        this.loaderModalState = this.loaderModalSubject.asObservable();
        this.loaderCampoState = this.loaderCampoSubject.asObservable();
    }

    public show(type?: string) {
      switch (type) {
        case 'modal':
          this.loaderModalSubject.next({show: true});
          break;
        case 'campo':
          this.loaderCampoSubject.next({show: true});
          break;
        default:
          this.loaderGlobalSubject.next({show: true});
      }
    }

    public hide(type?: string) {
      switch (type) {
        case 'modal':
         this.loaderModalSubject.next({show: false});
          break;
        case 'campo':
          this.loaderCampoState.next({show: false});
          break;
        default:
          this.loaderGlobalSubject.next({show: false});
      }
     }

}
