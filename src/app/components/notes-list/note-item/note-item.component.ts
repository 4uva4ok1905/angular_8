import {Component, Inject, Input, OnInit} from '@angular/core';
import {Notes} from '../../../data/notes/notes';
import {NoteEventsService} from '../../../services/notes/notes-events.service';
import {NotesService} from '../../../services/notes/notes.service';
import {ModalsEventsService} from '../../../services/modals/modals-events.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {

  @Input() note: Notes;

  constructor(
    @Inject(NoteEventsService) private noteEventService: NoteEventsService,
    @Inject(NotesService) private noteService: NotesService,
    @Inject(ModalsEventsService) private modalsService: ModalsEventsService,
  ) {
  }

  ngOnInit() {
  }

  deleteNote(note: Notes) {
    this.modalsService.modalDeleteNote(note);
  }
}
