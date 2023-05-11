import {Component, Input} from '@angular/core';
import {Reader} from "../../model/user_models/reader.model";
import {Role} from "../../model/user_models/role.model";
import {PortalService} from "../../portal.service";
import {AccountService} from "../../account.service";
import {Formuliar} from "../../model/user_models/formuliar.model";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {LoginInfo} from "../login/LoginInfo";
import {LibraryAdmin} from "../../model/hall_models/admin.model";
import {StoragesModel} from "../../model/book_models/storages.model";
import {BookDelivery} from "../../model/book_models/BookDelivery";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  currentFormuliar!: Formuliar;
  currentAdmin!: LibraryAdmin;
  listOfStorages!: StoragesModel[];
  listOfOrders!: BookDelivery[];
  isLoggedIn: boolean = false;
  isAdminLogin: boolean = false;
  displayedColumns: string[] = ['id', 'package_id', 'book_id', 'book_name', 'count_books', 'storage_id', 'hall'];
  constructor(private service: AccountService, private router: Router) {

  }


  ngOnInit(): void {
    this.isLoggedIn = this.getisLoggedIn();
    this.isAdminLogin = this.getIsAdminLogin();
    if (this.isLoggedIn) {
      if(this.isAdminLogin) {
        this.currentAdmin = this.getCurrentAdmin();
        this.getListOfStoragesByAdmin();
      }
      else {
        this.currentFormuliar = this.getCurrentFormuliar();
        this.getListOfOrdersByReader();
      }
    } else this.router.navigate(['login']);
  }

  LogOut(): void {
    this.service.isLoggedIn = false;
    this.service.isAdminLogin = false;
    this.router.navigate(['portal']);
  }

  getCurrentAdmin(){
    return this.service.currentAdmin;
  }

  getListOfStoragesByAdmin(){
    this.service.getStoragesByAdmin(this.currentAdmin.id).subscribe(result => this.listOfStorages = result);
  }

  getListOfOrdersByReader(){
    this.service.getOrdersByReader(this.currentFormuliar.id).subscribe(result => this.listOfOrders = result)
  }

  getCurrentFormuliar(){
    return this.service.currentFormuliar;
  }

  getisLoggedIn(){
    return this.service.isLoggedIn;
  }

  getIsAdminLogin(){
    return this.service.isAdminLogin;
  }
}
