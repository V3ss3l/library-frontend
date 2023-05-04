import { Component } from '@angular/core';
import {PortalService} from "../../portal.service";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../model/book_models/book.model";

@Component({
  selector: 'app-book.details',
  templateUrl: './book.details.component.html',
  styleUrls: ['./book.details.component.css']
})
export class BookDetailsComponent {
  currentBook!: Book;
  constructor(private service: PortalService, private route: ActivatedRoute) {
  }

  ngOnInit(): void{
    this.service.getBookById(this.route.snapshot.paramMap.get('id')).subscribe(result => {
      this.currentBook = result;
    })
  }
}
