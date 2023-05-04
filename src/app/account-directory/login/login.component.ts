import { Component } from '@angular/core';
import {AccountService} from "../../account.service";
import {Form} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoggenIN: boolean = false;
  constructor(private service: AccountService, private router: Router) {

  }

  submit(f: Form){
    /*if(this.currentFormuliar?.reader.email === f.value.email
      && this.currentFormuliar?.reader.password === f.value.password) {
      this.isLoggedIN = true;
      this.router.navigate(['/']);
    }*/
  }

  changeFormType(){
    this.router.navigate(['register']);
  }
}
