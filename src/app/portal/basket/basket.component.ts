import { Component } from '@angular/core';
import {PortalService} from "../../portal.service";
import {Book} from "../../model/book_models/book.model";
import {StoragesModel} from "../../model/book_models/storages.model";
import {AccountService} from "../../account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  currentBook: Book = new Book();
  listOfStorages: StoragesModel[] = [];
  constructor(private service: PortalService, private acc_service: AccountService, private router: Router) {
  }

  ngOnInit(): void {
    if(this.acc_service.isLoggedIn){
      this.currentBook = this.service.currentOrderedBook;
      this.getStoragesByBook(this.currentBook.id);
    } else {
      this.router.navigate(['login']);
    }
  }



  getStoragesByBook(id: any){
    this.service.getStoragesByBook(id).subscribe(result => this.listOfStorages = result);
  }

  submit() {

  }
}
