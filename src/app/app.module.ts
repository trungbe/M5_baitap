import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from '@angular/forms';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { HackernewComponent } from './hackernew/hackernew.component';
import { CountDownComponent } from './count-down/count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickerComponent,
    HackernewComponent,
    CountDownComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
