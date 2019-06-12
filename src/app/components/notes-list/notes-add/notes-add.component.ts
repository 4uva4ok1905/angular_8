import {Component, Inject, OnInit} from '@angular/core';
import {NotesService} from '../../../services/notes/notes.service';
import {UsersEventsService} from '../../../services/users/users-events.service';
import {NoteEventsService} from '../../../services/notes/notes-events.service';

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.scss']
})
export class NotesAddComponent implements OnInit {
  desc: string;
  name: string;
  private user = null;

  constructor(
    @Inject(NotesService) private noteService: NotesService,
    @Inject(UsersEventsService) private userEventService: UsersEventsService,
    @Inject(NoteEventsService) private noteEventService: NoteEventsService
  ) {
  }

  ngOnInit() {
    this.userEventService.selectUserMessage.subscribe(user => {
      this.user = user;
    });
  }

  addNote() {
    this.noteService.addNote(this.name, this.desc, this.user).subscribe(resp => {
      this.noteEventService.updateNote();
      this.name = '';
      this.desc = '';
    });
  }
}
