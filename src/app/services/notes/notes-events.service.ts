import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Users} from '../../data/users/users';

@Injectable({
  providedIn: 'root'
})
export class NoteEventsService {

  private pUpdateNote: Subject<Users> = new Subject();

  constructor() {
  }

  get updateNoteMessage() {
    return this.pUpdateNote;
  }

  public updateNote() {
    this.pUpdateNote.next(null);
  }
}
