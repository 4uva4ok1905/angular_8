import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Users} from '../../data/users/users';

@Injectable({
  providedIn: 'root'
})
export class UsersEventsService {

  private pSelectUser: Subject<Users> = new Subject();
  private pAddUser: Subject<null> = new Subject();
  private pDeleteUser: Subject<Users> = new Subject();

  constructor() {
  }

  get selectUserMessage() {
    return this.pSelectUser;
  }

  public selectUser(user: Users) {
    this.pSelectUser.next(user);
  }

  get addUserMessage() {
    return this.pAddUser;
  }

  public addUser() {
    this.pAddUser.next(null);
  }

  get deleteUserMessage() {
    return this.pDeleteUser;
  }

  public deleteUser(user: Users) {
    this.pDeleteUser.next(user);
  }
}
