import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment as env } from '../environments/environment';
import {Observable} from "rxjs";
import {Book} from "./model/book_models/book.model";
import {Publisher} from "./model/book_models/publisher.model";
import {LibraryAdmin} from "./model/hall_models/admin.model";
@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    const uri = `http://localhost:8081/book`;
    return this.http.get<Book[]>(uri);
  }

  getPublishers(): Observable<Publisher[]> {
    const uri = `http://localhost:8081/publisher`;
    return this.http.get<Publisher[]>(uri);
  }
}
