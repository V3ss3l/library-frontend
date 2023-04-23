import { Component } from '@angular/core';
import {Reader} from "../../model/user_models/reader.model";
import {Role} from "../../model/user_models/role.model";
import {PortalService} from "../../portal.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  newReader: Reader = new Reader();
  formType?: boolean;
  show?: boolean;
  roles: Role[];

  constructor(private service: PortalService) {
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
  submit(){
    this.newReader = new Reader()
    this.show = true;
  }

  getRoles(){
    this.service.getRoles().subscribe(result => this.roles = result);
  }
}
