import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginInfo} from "./LoginInfo";
import {Formuliar} from "../../model/user_models/formuliar.model";
import {LibraryAdmin} from "../../model/hall_models/admin.model";
import {AccountService} from "../../account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isAdminLogin!: boolean;
  constructor(private service: AccountService, private router: Router) {
  }

  ngOnInit(): void {
    this.isAdminLogin = this.getIsAdminLogin();
  }

  submit(f: NgForm){
    let json = f.value;
    console.log(json);
    let info = new LoginInfo(json.email, json.password);
    if(this.isAdminLogin){
      this.service.LoginAdmin(info).subscribe(result => {
        console.log(result);
        this.service.currentAdmin = result;
        this.service.isLoggedIn = true;
        this.router.navigate(['account']);
      })
    } else if(!this.isAdminLogin){
      this.service.LoginReader(info).subscribe(result => {
        console.log(result);
        this.service.currentFormuliar = result;
        this.service.isLoggedIn = true;
        this.router.navigate(['account']);
      })
    }
  }

  changeFormToRegistration(){
    this.router.navigate(['register']);
  }

  changeFormTypeToAdmin(flag: boolean) {
    this.service.isAdminLogin = flag;
    this.isAdminLogin = this.getIsAdminLogin();
  }

  getIsAdminLogin(){
    return this.service.isAdminLogin;
  }
}
