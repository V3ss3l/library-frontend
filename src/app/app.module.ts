import {APP_INITIALIZER, NgModule} from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {PortalService} from "./portal.service";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { AccountComponent } from './account-directory/account-component/account.component';
import {FormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "./app-routing.module";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatInputModule,
    MatExpansionModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    AppRoutingModule,
    MatDividerModule
  ],
  providers: [PortalService
    /*{
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
