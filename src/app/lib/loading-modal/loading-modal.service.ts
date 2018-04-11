import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingModalService {
  private loaderSubject: Subject<any>;
  public loaderState: any;

  constructor() {
    this.loaderSubject = new Subject();
    this.loaderState = this.loaderSubject.asObservable();
  }

  public show(textMessage?: string) {
    this.loaderSubject.next({ show: true, text: textMessage });
  }

  public hide() {
    this.loaderSubject.next({ show: false });
  }
}
