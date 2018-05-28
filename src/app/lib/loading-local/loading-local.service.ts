import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingLocalService {
  private loaderSubject: Subject<any>;
  public loaderState: any;

  constructor() {
    this.loaderSubject = new Subject();
    this.loaderState = this.loaderSubject.asObservable();
  }

  public show(element: string) {
    this.loaderSubject.next({ name: element, show: true });
  }

  public hide(element: string) {
    this.loaderSubject.next({ name: element, show: false });
  }
}
