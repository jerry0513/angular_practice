import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.css']
})
export class Lesson5Component implements OnInit {

  lesson5dollor: number = 0;
  @Input('twMoney')twMoney: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
