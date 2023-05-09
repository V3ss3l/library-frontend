import {Component, Output} from '@angular/core';
import {AccountService} from "../../account.service";
import {Form, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginInfo} from "./LoginInfo";
import {Reader} from "../../model/user_models/reader.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public isLoggenIN: boolean = false;
  constructor(private service: AccountService, private router: Router) {

  }

  ngOnInit(): void {
  }

  submit(r: NgForm){
    let json = r.value;
    console.log(json);
    let info = new LoginInfo(json.email, json.password);
    this.service.Login(info).subscribe(result => {
      console.log(result);
      this.isLoggenIN = true;
      this.router.navigate(['account'], {state: {flag: this.isLoggenIN, formuliar: result}})
    })
  }

  changeFormType(){
    this.router.navigate(['register']);
  }
}
