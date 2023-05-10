import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AccountComponent} from "./account-directory/account-component/account.component";
import {AppComponent} from "./app.component";
import {PortalComponent} from "./portal/portal.component";
import {BookDetailsComponent} from "./portal/book.details/book.details.component";
import {RegisterComponent} from "./account-directory/register/register.component";
import {BasketComponent} from "./portal/basket/basket.component";
import {LoginComponent} from "./account-directory/login/login.component";

const routes: Routes = [
  {path: 'portal', component: PortalComponent},
  {path: 'portal/:id', component: BookDetailsComponent},
  {path: 'account', component: AccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'basket', component: BasketComponent},
  {path: '',redirectTo: '/portal', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
