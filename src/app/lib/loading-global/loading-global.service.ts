import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingGlobalService {
  private _loaderSubject: Subject<any>;
  public loaderState: any;

  constructor() {
    this._loaderSubject = new Subject();
    this.loaderState = this._loaderSubject.asObservable();
  }

  public show() {
    this._loaderSubject.next({ show: true });
  }

  public hide() {
    this._loaderSubject.next({ show: false });
  }
}
