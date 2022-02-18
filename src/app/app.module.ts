import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChuckComponent } from './components/chuck/chuck.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { SColorComponent } from './components/p-color/s-color/s-color.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculadoraComponent,
    EvAndRefComponent,
    CookiesComponent,
    ListaDeComprasComponent,
    Pagina404Component,
    NavbarComponent,
    ChuckComponent,
    AddComponent,
    BuyComponent,
    PColorComponent,
    SColorComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
