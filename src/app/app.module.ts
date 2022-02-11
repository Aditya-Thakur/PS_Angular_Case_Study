import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductsComponent } from './components/products/products.component';
import { CounterComponent } from './components/timer/counter/counter.component';
import { InputComponent } from './components/timer/input/input.component';
import { LoggerComponent } from './components/timer/logger/logger.component';
import { DisplayComponent } from './components/timer/display/display.component';
import { StudentsComponent } from './components/students/students.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TcounterComponent } from './components/time/tcounter/tcounter.component';
import { TinputComponent } from './components/time/tinput/tinput.component';
import { TloggerComponent } from './components/time/tlogger/tlogger.component';
import { TdisplayComponent } from './components/time/tdisplay/tdisplay.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ProductsComponent,
    CounterComponent,
    InputComponent,
    LoggerComponent,
    DisplayComponent,
    StudentsComponent,
    DynamicComponent,
    NavbarComponent,
    TcounterComponent,
    TinputComponent,
    TloggerComponent,
    TdisplayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
