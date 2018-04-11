import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingGlobalService {
  private loaderSubject: Subject<any>;
  public loaderState: any;

  constructor() {
    this.loaderSubject = new Subject();
    this.loaderState = this.loaderSubject.asObservable();
  }

  public show() {
    this.loaderSubject.next({ show: true });
  }

  public hide() {
    this.loaderSubject.next({ show: false });
  }
}
