import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteItemComponent } from './components/notes-list/note-item/note-item.component';
import { UserItemComponent } from './components/users-list/user-item/user-item.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalsComponent } from './components/modals/modals.component';
import { AddUserComponent } from './components/modals/add-user/add-user.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { AddNoteComponent } from './components/modals/add-note/add-note.component';
import { DeleteNoteComponent } from './components/modals/delete-note/delete-note.component';
import { DeleteUserComponent } from './components/modals/delete-user/delete-user.component';

library.add(fas, far, fab);

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    NotesListComponent,
    NoteItemComponent,
    UserItemComponent,
    ModalsComponent,
    AddUserComponent,
    AddNoteComponent,
    DeleteNoteComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
