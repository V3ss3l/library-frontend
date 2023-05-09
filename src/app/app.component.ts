import { Component } from '@angular/core';
import {Adress} from "./model/adress.model";
import {PortalService} from "./portal.service";
import {Reader} from "./model/user_models/reader.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library-app';
  constructor() {
  }
}
