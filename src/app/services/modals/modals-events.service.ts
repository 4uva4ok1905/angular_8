import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalsEventsService {

  private pAddUser: Subject<null> = new Subject();

  constructor() { }

  get addUserMessage() {
    return this.pAddUser;
  }

  public addUser() {
    this.pAddUser.next(null);
  }
}
