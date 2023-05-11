import { Component } from '@angular/core';
import {PortalService} from "../../portal.service";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../model/book_models/book.model";
import {StoragesModel} from "../../model/book_models/storages.model";

@Component({
  selector: 'app-book.details',
  templateUrl: './book.details.component.html',
  styleUrls: ['./book.details.component.css']
})
export class BookDetailsComponent {
  currentBook!: Book;
  listOfStorages!: StoragesModel[];
  constructor(private service: PortalService, private route: ActivatedRoute) {
  }

  ngOnInit(): void{
    this.getBookById(this.route.snapshot.paramMap.get('id'));
    this.getStoragesByBook(this.route.snapshot.paramMap.get('id'));
  }

  getBookById(id: any){
    this.service.getBookById(id).subscribe(result => {
      this.currentBook = result;
    });
  }

  getStoragesByBook(id: any){
    this.service.getStoragesByBook(id).subscribe(result => {this.listOfStorages = result});
  }

}
