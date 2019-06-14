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

  notes: Array<Notes> = [];
  private user = null;

  constructor(
    @Inject(NotesService) private noteService: NotesService,
    @Inject(ModalsEventsService) private modalsService: ModalsEventsService,
    @Inject(UsersEventsService) private userEventService: UsersEventsService,
    @Inject(NoteEventsService) private noteEventService: NoteEventsService
  ) {
  }

  ngOnInit() {
    this.userEventService.selectUserMessage.subscribe(user => {
      this.user = user;
      this.noteEventService.updateNote();
    });

    this.noteEventService.updateNoteMessage.subscribe(note => {
      this.updateNotes();
    });
  }

  private updateNotes() {
    if (this.user != null) {
      this.noteService.notes(this.user).subscribe(note => {
        this.notes = note;
      });
    }
  }

  modalAddNote() {
    this.modalsService.modalAddNote();
  }
}
