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
admins: LibraryAdmin[];
  constructor(private service: PortalService) {
    this.books = [];
    this.publishers = [];
    this.admins = [];
  }

  ngOnInit(): void{
    this.getAdmins();
    this.getPublishers();
    this.getBooks();
  }

  getBooks(){
      this.service.getBooks().subscribe(result => this.books = result);
  }

  getPublishers(){
    this.service.getPublishers().subscribe(result => this.publishers = result);
  }

  getAdmins(){
    this.service.getAdmins().subscribe(result => this.admins = result);
  }
}
