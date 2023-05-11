import { Component } from '@angular/core';
import {PortalService} from "../portal.service";
import {Publisher} from "../model/book_models/publisher.model";
import {Book} from "../model/book_models/book.model";
import {LibraryAdmin} from "../model/hall_models/admin.model";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {
books: Book[];
publishers: Publisher[];
searchVar: string = "";
  constructor(private service: PortalService, private router: Router, private _snackBar: MatSnackBar) {
    this.books = [];
    this.publishers = [];
  }

  ngOnInit(): void{
    this.getPublishers();
    this.getBooks();
  }

  transferBookToBasket(book: Book) {
    this.service.currentOrderedBook = book;
    this._snackBar.open('Книга была добавлена в корзину!', 'Ok');
  }

  openBookDetails(id: number){
    this.router.navigate(['/portal', id]);
  }
  getBooks(){
      this.service.getBooks().subscribe(result => this.books = result);
  }

  getPublishers(){
    this.service.getPublishers().subscribe(result => this.publishers = result);
  }
}
