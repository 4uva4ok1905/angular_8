import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Notes} from '../../data/notes/notes';
import {Users} from '../../data/users/users';

@Injectable({
  providedIn: 'root'
})
export class ModalsEventsService {

  private pAddUser: Subject<null> = new Subject();
  private pAddNote: Subject<null> = new Subject();
  private pDeleteNote: Subject<Notes> = new Subject();
  private pDeleteUser: Subject<Users> = new Subject();

  constructor() { }

  get modalAddUserMessage() {
    return this.pAddUser;
  }

  public modalAddUser() {
    this.pAddUser.next(null);
  }

  get modalAddNoteMessage() {
    return this.pAddNote;
  }

  public modalAddNote() {
    this.pAddNote.next(null);
  }

  get modalDeleteNoteMessage() {
    return this.pDeleteNote;
  }

  public modalDeleteNote(note: Notes) {
    this.pDeleteNote.next(note);
  }

  get modalDeleteUserMessage() {
    return this.pDeleteUser;
  }

  public modalDeleteUser(user: Users) {
    this.pDeleteUser.next(user);
  }
}
