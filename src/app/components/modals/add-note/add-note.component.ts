import {Component, Inject, OnInit} from '@angular/core';
import {ModalsEventsService} from '../../../services/modals/modals-events.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  visible = false;

  constructor(
    @Inject(ModalsEventsService) private modalsService: ModalsEventsService,
  ) { }

  ngOnInit() {
    this.modalsService.modalAddNoteMessage.subscribe(modal => {
      this.visible = true;
    });
  }

}
