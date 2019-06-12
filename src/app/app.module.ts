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
import { NotesAddComponent } from './components/notes-list/notes-add/notes-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    NotesListComponent,
    NoteItemComponent,
    UserItemComponent,
    ModalsComponent,
    AddUserComponent,
    NotesAddComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
