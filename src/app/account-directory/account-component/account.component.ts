import { Component } from '@angular/core';
import {Reader} from "../../model/user_models/reader.model";
import {Role} from "../../model/user_models/role.model";
import {PortalService} from "../../portal.service";
import {AccountService} from "../../account.service";
import {Formuliar} from "../../model/user_models/formuliar.model";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  formType?: boolean;
  isLoggedIN?: boolean;
  roles: Role[];
  currentFormuliar?: Formuliar;

  constructor(private service: AccountService, private router: Router) {
    this.roles = [];
  }


  ngOnInit(): void {
    if(this.isLoggedIN) {

    }
    this.formType = false;
    this.isLoggedIN = false;
    this.getRoles();
  }

  changeFormType(type: boolean): void {
    this.formType = type;
  }

  submit(f: NgForm){
    if(!this.formType
      && this.currentFormuliar?.reader.email === f.value.email
      && this.currentFormuliar?.reader.password === f.value.password){
      this.isLoggedIN = true;
      this.router.navigate(['/']);
    } else {
      let json = f.value;
      let newReader: Reader = new Reader();
      newReader.lastName = json.lastName;
      newReader.firstName = json.firstName;
      newReader.surName = json.surName;
      newReader.email = json.email;
      newReader.cellular = json.cellular;
      newReader.role = json.role;
      newReader.password = json.password;
      this.addReader(newReader);
    }
  }

  getRoles(){
    this.service.getRoles().subscribe(result => this.roles = result);
  }
  addReader(reader: Reader){
    this.service.addReader(reader).subscribe(result => {
      this.service.addFormuliar(result).subscribe(result => {
        this.currentFormuliar = result;
        this.formType = false;
      })
    })
  }
}
