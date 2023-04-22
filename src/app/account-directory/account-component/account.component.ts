import { Component } from '@angular/core';
import {Reader} from "../../model/user_models/reader.model";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  newReader?: Reader;
  formType?: boolean;
  show?: boolean;

  ngOnInit(): void {
    this.formType = false;
    this.show = false;
  }
  changeFormType(type: boolean): void {
    this.formType = type;
  }
  submit(){
    this.newReader = new Reader()
    this.show = true;
  }
}
