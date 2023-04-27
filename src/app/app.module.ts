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
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RegisterComponent } from './register/register.component';
import { ListaCartiNumeComponent } from './lista-carti-nume/lista-carti-nume.component';
import { ListaCartiAutorComponent } from './lista-carti-autor/lista-carti-autor.component';

@NgModule({
  declarations: [
    AppComponent,
    CartiListComponent,
    CreateCarteComponent,
    UpdateCarteComponent,
    CarteDetailsComponent,
    LoginComponent,
    AdminPageComponent,
    RegisterComponent,
    ListaCartiNumeComponent,
    ListaCartiAutorComponent,
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
