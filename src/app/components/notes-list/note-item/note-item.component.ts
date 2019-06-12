import {Component, Input, OnInit} from '@angular/core';
import {Notes} from '../../../data/notes/notes';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {

  @Input() note: Notes;

  constructor() {
  }

  ngOnInit() {
  }

}
