import {Component, Inject, OnInit} from '@angular/core';
import {ModalsEventsService} from '../../../services/modals/modals-events.service';
import {NoteEventsService} from '../../../services/notes/notes-events.service';
import {NotesService} from '../../../services/notes/notes.service';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.scss']
})
export class DeleteNoteComponent implements OnInit {
  visible = false;
  private note = null;

  constructor(
    @Inject(ModalsEventsService) private modalsService: ModalsEventsService,
    @Inject(NoteEventsService) private noteEventService: NoteEventsService,
    @Inject(NotesService) private noteService: NotesService
  ) { }

  ngOnInit() {
    this.modalsService.modalDeleteNoteMessage.subscribe(note => {
      this.visible = true;
      this.note = note;
    });
  }

  deleteNote() {
    this.noteService.deleteNote(this.note).subscribe(resp => {
      this.noteEventService.updateNote();
      this.visible = false;
    });
  }

}
