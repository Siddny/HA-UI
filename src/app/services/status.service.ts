import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


const httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
};


@Injectable()
export class StatusService {
  
  // url: string = 'http://127.0.0.1:8000/acc/Status';
    
  constructor(private http: Http) { }
  
  getFoods() {
    return this.http.get('http://127.0.0.1:8000/acc/Status');
  }

  createFood(food) {
      let body = JSON.stringify(food);
      return this.http.post('http://127.0.0.1:8000/acc/Status', body, httpOptions);
  }

  updateFood(food) {
      let body = JSON.stringify(food);
      return this.http.put('http://127.0.0.1:8000/acc/Status' + food.id, body, httpOptions);
  }

  deleteFood(food) {
      return this.http.delete('http://127.0.0.1:8000/acc/Status' + food.id);
  }

  delHospital(hospital:any) {
    let url = 'http://127.0.0.1:8000/acc/Status';
    let headers = new Headers({
      'Content-Type' : 'application/json',
    });
    return this.http.delete(url, JSON.stringify(hospital));
  }


  // add new (post)
  newHospital(hospital:any) {
    let url = 'http://127.0.0.1:8000/acc/Status';
    let headers = new Headers({
      'Content-Type' : 'application/json',
    });
    return this.http.post(url, JSON.stringify(hospital), {headers : headers});
  }
   
}



