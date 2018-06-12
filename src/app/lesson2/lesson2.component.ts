import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {
  score: number = 100;
  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  isPass(score){
    if(this.score < 60){
      this.show = false;
    }else{
      this.show = true;
    }
  }
}