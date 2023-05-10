import { Component } from '@angular/core';
import {PortalService} from "../portal.service";
import {Publisher} from "../model/book_models/publisher.model";
import {Book} from "../model/book_models/book.model";
import {LibraryAdmin} from "../model/hall_models/admin.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent {
books: Book[];
publishers: Publisher[];
searchVar: string = "";
  constructor(private service: PortalService, private router: Router) {
    this.books = [];
    this.publishers = [];
  }

  ngOnInit(): void{
    this.getPublishers();
    this.getBooks();
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
