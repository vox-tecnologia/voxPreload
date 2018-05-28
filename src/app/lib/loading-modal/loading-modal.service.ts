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

  public show(content?: {title?: string, message?: string}) {
    this._loaderSubject.next({ show: true, content: content });
  }

  public hide() {
    this._loaderSubject.next({ show: false });
  }
}
