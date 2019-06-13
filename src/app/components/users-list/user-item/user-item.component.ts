import {Component, Inject, Input, OnInit} from '@angular/core';
import {Users} from '../../../data/users/users';
import {UsersEventsService} from '../../../services/users/users-events.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  constructor(
    @Inject(UsersEventsService) private userEvents: UsersEventsService
  ) {}

  @Input() user: Users;
  @Input() active: Users;

  ngOnInit() {}

  selectUser(user: Users) {
    this.userEvents.selectUser(user);
  }

  deleteUser(user: Users, e) {
    e.stopPropagation();
    this.userEvents.deleteUser(user);
  }
}
