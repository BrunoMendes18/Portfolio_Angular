import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { SColorComponent } from './components/p-color/s-color/s-color.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"calculadora",component:CalculadoraComponent},
  {path:"pagina404",component:Pagina404Component},
  {path:"cookies",component:CookiesComponent},
  {path:"evandref",component:EvAndRefComponent},
  {
    path: 'listadecompras',
    component: ListaDeComprasComponent,
    children: [
      { path: 'Add', component: AddComponent },
      { path: 'Buy', component: BuyComponent },
    ],
  },
  {path:"pagina404",component:Pagina404Component},
  {path:"chuck",component:ChuckComponent},
  {
    path: 'p-color',
    component: PColorComponent,
    children: [{ path: ':color', component: SColorComponent }],
  },
  {path:"**",redirectTo:"pagina404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
