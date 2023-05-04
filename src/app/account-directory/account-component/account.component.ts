import { Component } from '@angular/core';
import {Reader} from "../../model/user_models/reader.model";
import {Role} from "../../model/user_models/role.model";
import {PortalService} from "../../portal.service";
import {AccountService} from "../../account.service";
import {Formuliar} from "../../model/user_models/formuliar.model";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  isLoggedIN: boolean = false;
  constructor(private service: AccountService, private router: Router) {
  }


  ngOnInit(): void {
    if(!this.isLoggedIN) this.router.navigate(['login']);
  }
}
