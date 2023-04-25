import { Component } from '@angular/core';
import {Reader} from "../../model/user_models/reader.model";
import {Role} from "../../model/user_models/role.model";
import {PortalService} from "../../portal.service";
import {AccountService} from "../../account.service";
import {Formuliar} from "../../model/user_models/formuliar.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  formType?: boolean;
  show?: boolean;
  roles: Role[];
  currentFormuliar?: Formuliar;

  constructor(private service: AccountService) {
    this.roles = [];
  }


  ngOnInit(): void {
    this.formType = false;
    this.show = false;
    this.getRoles();
  }

  changeFormType(type: boolean): void {
    this.formType = type;
  }

  submit(f: NgForm){
    let json =  f.value;
    let newReader: Reader = new Reader();
    newReader.lastName = json.lastName;
    newReader.firstName = json.firstName;
    newReader.surName = json.surName;
    newReader.email = json.email;
    newReader.cellular = json.cellular;
    newReader.role = json.role;
    newReader.password = json.password;
    this.addReader(newReader);
    this.show = true;
  }

  getRoles(){
    this.service.getRoles().subscribe(result => this.roles = result);
  }
  addReader(reader: Reader){
    this.service.addReader(reader).subscribe(result => {
      this.service.addFormuliar(result).subscribe(result => {
        this.currentFormuliar = result;
      })
    })
  }
}
