import { Component } from '@angular/core';
import {Role} from "../../model/user_models/role.model";
import {AccountService} from "../../account.service";
import {Reader} from "../../model/user_models/reader.model";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  roles: Role[];

  constructor(private service: AccountService, private router: Router) {
    this.roles = [];
  }

  ngOnInit(): void {
    this.getRoles();
  }
  submit(f: NgForm){
    let json = f.value;
    console.log(json);
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
  getRoles(){
    this.service.getRoles().subscribe(result => this.roles = result);
  }

  addReader(reader: Reader){
    this.service.addReader(reader).subscribe(result => {
      this.service.addFormuliar(result).subscribe(result => {
        this.router.navigate(['login'])
      })
    })
  }

  changeFormType() {
    this.router.navigate(['login']);
  }
}
