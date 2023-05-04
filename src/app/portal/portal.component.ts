import { Component } from '@angular/core';
import {PortalService} from "../portal.service";
import {Publisher} from "../model/book_models/publisher.model";
import {Book} from "../model/book_models/book.model";
import {LibraryAdmin} from "../model/hall_models/admin.model";

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {
books: Book[];
publishers: Publisher[];
searchOptions: string[];
searchVar: string = "";
  constructor(private service: PortalService) {
    this.books = [];
    this.publishers = [];
    this.searchOptions = ["Name", "Author", "Publisher"];
  }

  ngOnInit(): void{
    this.getPublishers();
    this.getBooks();

  }

  getBooks(){
      this.service.getBooks().subscribe(result => this.books = result);
  }

  getPublishers(){
    this.service.getPublishers().subscribe(result => this.publishers = result);
  }
}
