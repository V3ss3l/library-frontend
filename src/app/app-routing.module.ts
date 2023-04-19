import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthorizationComponent} from "./account-directory/auth/authorization.component";
import {AccountComponent} from "./account-directory/account-component/account.component";

const routes: Routes = [
  {path: 'auth', component: AuthorizationComponent},
  {path: 'account', component: AccountComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
