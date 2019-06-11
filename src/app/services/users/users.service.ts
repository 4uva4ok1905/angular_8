import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../../data/users/users";
import {Config} from "./config";
import {map} from "rxjs/operators";
import {UserResponse} from "../../data/users/user-response";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http: HttpClient;
  private config: Config;

  constructor(@Inject(HttpClient) http: HttpClient) {
    this.http = http;
    this.config = new Config();
  }

  get users():Observable<Array<Users>>{
    return this.http.get(this.config.getUsersUrl)
      .pipe(map(resp => UserResponse.formJson(resp)))
      .pipe(map(data => data.data))
  }
}
