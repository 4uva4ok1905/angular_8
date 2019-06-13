import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalsEventsService {

  private pAddUser: Subject<null> = new Subject();
  private pAddNote: Subject<null> = new Subject();

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
}
