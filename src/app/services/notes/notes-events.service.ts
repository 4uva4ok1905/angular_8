import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Users} from '../../data/users/users';
import {Notes} from '../../data/notes/notes';

@Injectable({
  providedIn: 'root'
})
export class NoteEventsService {

  private pUpdateNote: Subject<null> = new Subject();
  private pDeleteNote: Subject<Notes> = new Subject();

  constructor() {
  }

  get updateNoteMessage() {
    return this.pUpdateNote;
  }

  public updateNote() {
    this.pUpdateNote.next(null);
  }

  get deleteNoteMessage() {
    return this.pDeleteNote;
  }

  public deleteNote(note: Notes) {
    this.pDeleteNote.next(note);
  }
}
