import {Component, Inject, OnInit} from '@angular/core';
import {UsersService} from "../../services/users/users.service";
import {Users} from "../../data/users/users";

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  private usersService: UsersService;
  private users: Array<Users> = [];

  constructor(@Inject(UsersService) UsersService) {
    this.usersService = UsersService;
  }

  ngOnInit() {
    this.usersService.users.subscribe(users => {
      console.log(users);
      return this.users = users;
    })
  }
}
