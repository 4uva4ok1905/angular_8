import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../../data/users/users';
import {map} from 'rxjs/operators';
import {UserResponse} from '../../data/users/user-response';
import {UsersConfig} from './users-config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http: HttpClient;
  private config: UsersConfig;

  constructor(@Inject(HttpClient) http: HttpClient) {
    this.http = http;
    this.config = new UsersConfig();
  }

  get getUsers(): Observable<Array<Users>> {

    return this.http.get(this.config.getUsersUrl)
      .pipe(map(resp => UserResponse.formJson(resp)))
      .pipe(map(user => user.data));
  }

  addUser(name: string): Observable<any> {

    const data = 'name=' + name;

    const options = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    };

    return this.http.post(this.config.addUsersUrl, data, options);
  }

  deleteUser(user): Observable<any> {

    const data = 'id=' + user.id;

    const options = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    };

    return this.http.post(this.config.deleteUsersUrl, data, options);
  }
}
