import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'app';
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;

  url: string = 'http://127.0.0.1:8000/api/';

  // added code
  constructor(private http: Http) { }
  public getProducts() {
          this.http.get(this.url).toPromise().then((res) => {
          console.log(res.json());
      });
  }
  // end of ended code
  
  showAnswer() {
    this.showSpinner = true;


    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;

    }, 2000);
  }
}


// import { Component } from '@angular/core';
