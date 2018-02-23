import { Component, Input, Injectable, ViewEncapsulation, OnInit } from '@angular/core';

import { StatusService } from './services/status.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public food;
  public food_name;

  // title = 'app';
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  response: any[]; 
  // new_status: StatusList;

  url: string = 'http://127.0.0.1:8000/acc/Status';


  new_hospital:Hospital = new Hospital()

  constructor(private _demoService: StatusService, private http: Http) { }

  ngOnInit() {
    this.getProducts();
  }
  
  public getProducts() {
        this.http.get(this.url).toPromise().then((res) => {
        // this.response = res.json();
        // console.log(res.json());
        // console.log(this.response);
        console.log("lol");
    });
    return this.getProducts
  }

 
  createFood(name) {
    let food = {name: name};
    this._demoService.createFood(food).subscribe(
       data => {
         // refresh the list
         this.getProducts();
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }

  updateFood(food) {
    this._demoService.updateFood(food).subscribe(
       data => {
         // refresh the list
         this.getProducts();
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }

 remHospital(){
    // this.new_patient.patient_id= this.patient.id;
    console.log(this.new_hospital)
    this._demoService.delHospital(this.new_hospital).subscribe(
      res => {
        this.new_hospital = new Hospital();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );
  }

 addHospital(){
    // this.new_patient.patient_id= this.patient.id;
    console.log(this.new_hospital)
    this._demoService.newHospital(this.new_hospital).subscribe(
      res => {
        this.new_hospital = new Hospital();
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );
  }
 
 }

export class Hospital{
  name:string;
}
