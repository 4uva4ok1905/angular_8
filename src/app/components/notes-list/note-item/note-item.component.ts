import {Component, Inject, Input, OnInit} from '@angular/core';
import {Notes} from '../../../data/notes/notes';
import {NoteEventsService} from '../../../services/notes/notes-events.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {

  @Input() note: Notes;

  constructor(
    @Inject(NoteEventsService) private noteEventService: NoteEventsService
  ) {
  }

  ngOnInit() {
  }

  deleteNote(note: Notes) {
    this.noteEventService.deleteNote(note);
  }
}
