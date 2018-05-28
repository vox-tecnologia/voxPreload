import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingModalService {
  private _loaderSubject: Subject<any>;
  public loaderState: any;

  constructor() {
    this._loaderSubject = new Subject();
    this.loaderState = this._loaderSubject.asObservable();
  }

  public show(textMessage?: string) {
    this._loaderSubject.next({ show: true, text: textMessage });
  }

  public hide() {
    this._loaderSubject.next({ show: false });
  }
}
