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
import {MatSelectModule} from "@angular/material/select";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { RegisterComponent } from './account-directory/register/register.component';
import { BookDetailsComponent } from './portal/book.details/book.details.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatListModule} from "@angular/material/list";
import { BasketComponent } from './portal/basket/basket.component';
import {MatStepperModule} from "@angular/material/stepper";
import { LoginComponent } from './account-directory/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    AccountComponent,
    RegisterComponent,
    BookDetailsComponent,
    BasketComponent,
    LoginComponent
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
        MatDividerModule,
        MatSelectModule,
        Ng2SearchPipeModule,
        MatTooltipModule,
        MatListModule,
        MatStepperModule
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
