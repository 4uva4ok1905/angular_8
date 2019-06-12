import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotesConfig} from './notes-config';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Notes} from '../../data/notes/notes';
import {Users} from '../../data/users/users';
import {NotesResponse} from '../../data/notes/notes-response';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private http: HttpClient;
  private config: NotesConfig;

  constructor(@Inject(HttpClient) http: HttpClient) {
    this.http = http;
    this.config = new NotesConfig();
  }

  public notes(user: Users): Observable<Array<Notes>> {

    const data = 'id=' + user.id;

    const options = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    };

    return this.http.post(this.config.getTodoUrl, data, options)
      .pipe(map(resp => NotesResponse.formJson(resp)))
      .pipe(map(note => note.data));
  }

  addNote(name: string, desc: string, user: Users): Observable<any> {

    const data = 'id=' + user.id + '&name=' + name + '&desc=' + desc;

    const options = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    };

    return this.http.post(this.config.addTodoUrl, data, options);
  }
}
