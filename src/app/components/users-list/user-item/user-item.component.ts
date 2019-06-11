import {Component, Inject, Input, OnInit} from '@angular/core';
import {Users} from "../../../data/users/users";
import {UsersEventsService} from "../../../services/users/users-events.service";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  private pActiveUser:Users = null;

  constructor(@Inject(UsersEventsService) private userEvents: UsersEventsService ){}

  @Input() user:Users;

  ngOnInit() {
  }


  get activeUser(): Users {
    return this.pActiveUser;
  }

  set activeUser(value: Users) {
    this.userEvents.changeCategory(value);
    this.pActiveUser = value;
    console.log(this.activeUser);
  }
}
