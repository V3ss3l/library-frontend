import { Component } from '@angular/core';
import {PortalService} from "../../portal.service";
import {Book} from "../../model/book_models/book.model";
import {StoragesModel} from "../../model/book_models/storages.model";
import {AccountService} from "../../account.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {BookDelivery} from "../../model/book_models/BookDelivery";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  orderForm = new FormGroup({
  storage: new FormControl<StoragesModel | null>(new StoragesModel())
});
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
    let json = this.orderForm.value;
    let order: BookDelivery = new BookDelivery();
    order.formuliar = this.acc_service.currentFormuliar;
    order.book = this.currentBook;
    this.service.addBookDeliveryOrder(order).subscribe(result => {
      this.router.navigate(['account']);
    })
  }
}
