import {Component, Input} from '@angular/core';
import {Reader} from "../../model/user_models/reader.model";
import {Role} from "../../model/user_models/role.model";
import {PortalService} from "../../portal.service";
import {AccountService} from "../../account.service";
import {Formuliar} from "../../model/user_models/formuliar.model";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  isLoggedIn: boolean = false;
  currentFormuliar!: Formuliar;
  constructor(private service: AccountService, private router: Router, private activRoute: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }


  ngOnInit(): void {
    this.isLoggedIn = history.state.isLoggedIn;
    this.currentFormuliar = history.state.formuliar;
    /*if(!this.isLoggedIn) this.router.navigate(['login'])*/
  }
}
