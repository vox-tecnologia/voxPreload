import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingInputService {
  private _loaderSubject: Subject<any>;
  public loaderState: any;

  constructor() {
    this._loaderSubject = new Subject();
    this.loaderState = this._loaderSubject.asObservable();
  }

  public show(element: string, textMessage?: string) {
    this._loaderSubject.next({ show: true, name: element, text: textMessage });
  }

  public hide(
    element: string,
    status: 'success' | 'error',
    text?: { success?: string; error?: string }
  ) {
    this._loaderSubject.next({ show: false, name: element, status: status, text: text });
  }
}
