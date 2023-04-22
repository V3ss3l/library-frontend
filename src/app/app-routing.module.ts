import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AccountComponent} from "./account-directory/account-component/account.component";
import {AppComponent} from "./app.component";
import {PortalComponent} from "./portal/portal.component";

const routes: Routes = [
  {path: 'portal', component: PortalComponent},
  {path: 'account', component: AccountComponent},
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
