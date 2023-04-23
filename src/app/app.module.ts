import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartiListComponent } from './carti-list/carti-list.component';
import { CreateCarteComponent } from './create-carte/create-carte.component';
import { FormsModule } from '@angular/forms';
import { UpdateCarteComponent } from './update-carte/update-carte.component';
import { CarteDetailsComponent } from './carte-details/carte-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CartiListComponent,
    CreateCarteComponent,
    UpdateCarteComponent,
    CarteDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
