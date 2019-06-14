import {Component, Inject, OnInit} from '@angular/core';
import {ModalsEventsService} from '../../../services/modals/modals-events.service';
import {UsersEventsService} from '../../../services/users/users-events.service';
import {NoteEventsService} from '../../../services/notes/notes-events.service';
import {NotesService} from '../../../services/notes/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  visible = false;
  desc = '';
  name = '';
  private user = null;

  constructor(
    @Inject(ModalsEventsService) private modalsService: ModalsEventsService,
    @Inject(UsersEventsService) private userEventService: UsersEventsService,
    @Inject(NoteEventsService) private noteEventService: NoteEventsService,
    @Inject(NotesService) private noteService: NotesService,
  ) {
  }

  ngOnInit() {
    this.userEventService.selectUserMessage.subscribe(user => {
      this.user = user;
    });

    this.modalsService.modalAddNoteMessage.subscribe(modal => {
      this.visible = true;
    });
  }

  addNote() {
    this.noteService.addNote(this.name, this.desc, this.user).subscribe(resp => {
      this.noteEventService.updateNote();
      this.name = '';
      this.desc = '';
      this.visible = false;
    });
  }
}
