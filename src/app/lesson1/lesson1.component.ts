import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  URL: string = "https://angular.io/";
  dollor: number = 0;
  a: Account = {
    account: 'hi',
    password: '123'
  }
  
  constructor() { }

  ngOnInit() {
    
  }

  addTen(val:number){
    this.dollor +=10;
  }

  showAccount(){
    this.a;
  }
}
interface Account {
  account?: string;
  password?: string;
}
