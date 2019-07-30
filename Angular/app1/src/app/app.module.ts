
// Step 1 : Importing NgModule , BrowserModule, AppModule
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Step 2: Configuring NgModule with Declarations Imports And Bootstrap
@NgModule({
  declarations:[
      AppComponent,
      HomeComponent
  ],
  imports:[BrowserModule],
  bootstrap: [AppComponent]

})
// exporting the AppModule
export class AppModule { }