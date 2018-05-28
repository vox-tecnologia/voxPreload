import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingLocalService {
  private _loaderSubject: Subject<any>;
  public loaderState: any;

  constructor() {
    this._loaderSubject = new Subject();
    this.loaderState = this._loaderSubject.asObservable();
  }

  public show(element: string) {
    this._loaderSubject.next({ name: element, show: true });
  }

  public hide(element: string) {
    this._loaderSubject.next({ name: element, show: false });
  }
}
