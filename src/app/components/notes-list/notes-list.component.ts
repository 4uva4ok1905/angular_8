import {Component, Inject, OnInit} from '@angular/core';
import {Notes} from '../../data/notes/notes';
import {UsersEventsService} from '../../services/users/users-events.service';
import {NotesService} from '../../services/notes/notes.service';
import {NoteEventsService} from '../../services/notes/notes-events.service';
import {ModalsEventsService} from '../../services/modals/modals-events.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  private notes: Array<Notes> = [];

  constructor(
    @Inject(NotesService) private noteService: NotesService,
    @Inject(ModalsEventsService) private modalsService: ModalsEventsService,
    @Inject(UsersEventsService) private userEventService: UsersEventsService,
    @Inject(NoteEventsService) private noteEventService: NoteEventsService
  ) {
  }

  ngOnInit() {

    this.updateNotes();
    this.noteEventService.updateNoteMessage.subscribe(resp => {
      this.updateNotes();
    });

    this.noteEventService.deleteNoteMessage.subscribe(note => {
      this.noteService.deleteNote(note).subscribe(resp => {

      });
    });

  }

  private updateNotes() {
    this.userEventService.selectUserMessage.subscribe(user => {
      this.noteService.notes(user).subscribe(note => {
        this.notes = note;
      });
    });
  }

  modalAddNote() {
    this.modalsService.modalAddNote();
  }
}
