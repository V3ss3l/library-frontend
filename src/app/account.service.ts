import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reader} from "./model/user_models/reader.model";
import {Book} from "./model/book_models/book.model";
import {Formuliar} from "./model/user_models/formuliar.model";
import {Role} from "./model/user_models/role.model";
import {LoginInfo} from "./account-directory/login/LoginInfo";
import {LibraryAdmin} from "./model/hall_models/admin.model";
import {StoragesModel} from "./model/book_models/storages.model";
import {BookDelivery} from "./model/book_models/BookDelivery";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  get isAdminLogin(): boolean {
    return this._isAdminLogin;
  }

  set isAdminLogin(value: boolean) {
    this._isAdminLogin = value;
  }
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
  get currentAdmin(): LibraryAdmin {
    return this._currentAdmin;
  }

  set currentAdmin(value: LibraryAdmin) {
    this._currentAdmin = value;
  }
  get currentFormuliar(): Formuliar {
    return this._currentFormuliar;
  }

  set currentFormuliar(value: Formuliar) {
    this._currentFormuliar = value;
  }

  private _currentFormuliar!: Formuliar;
  private _currentAdmin!: LibraryAdmin;
  private _isLoggedIn: boolean = false;
  private _isAdminLogin: boolean = false;

  constructor(private http: HttpClient) { }

  getReaders(): Observable<Reader[]> {
    const uri = `http://localhost:8081/reader`;
    return this.http.get<Reader[]>(uri);
  }

  addReader(reader: Reader): Observable<Reader>{
    const uri = `http://localhost:8081/reader`;
    return this.http.post<Reader>(uri, reader, {withCredentials: true});
  }

  getFormuliar(id: any): Observable<Formuliar>{
    const uri = `http://localhost:8081/formuliar/${id}`;
    return this.http.get<Formuliar>(uri);
  }

  getAdmin(id: any): Observable<LibraryAdmin>{
    const uri = `http://localhost:8081/libraryadmin/${id}`;
    return this.http.get<LibraryAdmin>(uri);
  }

  getStoragesByAdmin(id: any): Observable<StoragesModel[]> {
    const uri = `http://localhost:8081/libraryadmin/${id}/storages`;
    return this.http.get<StoragesModel[]>(uri);
  }

  getOrdersByReader(id: any): Observable<BookDelivery[]> {
    const uri = `http://localhost:8081/formuliar/${id}/orders`;
    return this.http.get<BookDelivery[]>(uri);
  }

  addFormuliar(reader: Reader): Observable<Formuliar>{
    const uri = `http://localhost:8081/formuliar`;
    let formulair: Formuliar = new Formuliar(new Date(), 0, reader);
    return this.http.post<Formuliar>(uri, formulair);
  }

  LoginReader(info: LoginInfo): Observable<Formuliar> {
    const uri = `http://localhost:8081/formuliar/login`;
    return this.http.post<Formuliar>(uri, info);
  }

  LoginAdmin(info: LoginInfo): Observable<LibraryAdmin> {
    const uri = `http://localhost:8081/libraryadmin/login`;
    return this.http.post<LibraryAdmin>(uri, info);
  }

  getRoles(): Observable<Role[]>{
    const uri = `http://localhost:8081/readerrole`;
    return this.http.get<Role[]>(uri);
  }
}
