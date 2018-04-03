import { Component } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lero: Object = [{name: 'nothing to see here'}];

  public constructor(private loadingService: LoadingService, private http: HttpClient) {
    this.loadingService = loadingService;
    this.http = http;
  }

  click() {
    this.loadingService.show();
    this.http.get('https://jsonplaceholder.typicode.com/users', {responseType: 'json'}).subscribe(suc => {
      this.lero = suc;
      this.loadingService.hide();
    });
  }
}
