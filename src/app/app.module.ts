import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import {FormsModule} from "@angular/forms";
import { HowerDirective } from './hower.directive';
import { HeartPipe } from './heart.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HowerDirective,
    HeartPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
