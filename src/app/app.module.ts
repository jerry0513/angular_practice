import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { CommonModule } from '@angular/common';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { CoinConverterComponent } from './coin-converter/coin-converter.component';
import { DirectiveDirective } from './directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Lesson4Component,
    Lesson5Component,
    CoinConverterComponent,
    DirectiveDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
              Lesson1Component,
              Lesson2Component,
              Lesson3Component,
              Lesson4Component,
              Lesson5Component,
              CoinConverterComponent]
})
export class AppModule { }
