import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment as env } from '../environments/environment';
import {Observable} from "rxjs";
import {Book} from "./model/book_models/book.model";
import {Publisher} from "./model/book_models/publisher.model";
import {LibraryAdmin} from "./model/hall_models/admin.model";
import {Role} from "./model/user_models/role.model";
import {StoragesModel} from "./model/book_models/storages.model";
import {BookDelivery} from "./model/book_models/BookDelivery";
@Injectable({
  providedIn: 'root'
})
export class PortalService {
  get currentOrderedBook(): Book {
    return this._currentOrderedBook;
  }

  set currentOrderedBook(value: Book) {
    this._currentOrderedBook = value;
  }

  private _currentOrderedBook!: Book;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    const uri = `http://localhost:8081/book`;
    return this.http.get<Book[]>(uri);
  }

  getBookById(id: any): Observable<Book> {
    const uri = `http://localhost:8081/book/${id}`;
    return this.http.get<Book>(uri);
  }

  getPublishers(): Observable<Publisher[]> {
    const uri = `http://localhost:8081/publisher`;
    return this.http.get<Publisher[]>(uri);
  }

  addBookDeliveryOrder(order: BookDelivery): Observable<any>{
    const uri = `http://localhost:8081/bookdelivery`;
    return this.http.post(uri, order);
  }

  getStoragesByBook(id: any): Observable<StoragesModel[]>{
    const uri = `http://localhost:8081/book/${id}/storages`;
    return this.http.get<StoragesModel[]>(uri);
  }
}
