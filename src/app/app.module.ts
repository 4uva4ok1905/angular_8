import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteItemComponent } from './components/notes-list/note-item/note-item.component';
import { UserItemComponent } from './components/users-list/user-item/user-item.component';
import {UsersListComponent} from "./components/users-list/users-list.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    NotesListComponent,
    NoteItemComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
