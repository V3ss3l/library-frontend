import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reader} from "./model/user_models/reader.model";
import {Book} from "./model/book_models/book.model";
import {Formuliar} from "./model/user_models/formuliar.model";
import {Role} from "./model/user_models/role.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getReaders(): Observable<Reader[]> {
    const uri = `http://localhost:8081/reader`;
    return this.http.get<Reader[]>(uri);
  }

  addReader(reader: Reader): Observable<Reader>{
    const uri = `http://localhost:8081/reader`;
    return this.http.post<Reader>(uri, reader, {withCredentials: true});
  }

  getFormuliar(id: number): Observable<Formuliar>{
    const uri = `http://localhost:8081/formuliar/${id}`;
    return this.http.get<Formuliar>(uri);
  }

  addFormuliar(reader: Reader): Observable<Formuliar>{
    const uri = `http://localhost:8081/formuliar`;
    let formulair: Formuliar = new Formuliar(new Date(), 0, reader);
    return this.http.post<Formuliar>(uri, formulair);
  }

  getRoles(): Observable<Role[]>{
    const uri = `http://localhost:8081/readerrole`;
    return this.http.get<Role[]>(uri);
  }
}
