import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Users} from "../../data/users/users";

@Injectable({
  providedIn: 'root'
})
export class UsersEventsService {

  private pChangeCategory:Subject<Users> = new Subject();

  constructor() { }

  get changeCategoryMessage() {
    return this.pChangeCategory;
  }

  public changeCategory(user: Users){
    this.pChangeCategory.next(user);
  }
}
