import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Users} from '../../data/users/users';

@Injectable({
  providedIn: 'root'
})

export class UsersEventsService {

  private pSelectUser: Subject<Users> = new Subject();
  private pUpdateUser: Subject<null> = new Subject();

  constructor() {
  }

  get selectUserMessage() {
    return this.pSelectUser;
  }

  public selectUser(user: Users) {
    this.pSelectUser.next(user);
  }

  get updateUsersMessage() {
    return this.pUpdateUser;
  }

  public updateUsers() {
    this.pUpdateUser.next(null);
  }
}
