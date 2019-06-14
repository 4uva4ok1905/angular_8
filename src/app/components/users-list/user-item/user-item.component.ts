import {Component, Inject, Input, OnInit} from '@angular/core';
import {Users} from '../../../data/users/users';
import {UsersEventsService} from '../../../services/users/users-events.service';
import {UsersService} from '../../../services/users/users.service';
import {ModalsEventsService} from '../../../services/modals/modals-events.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  constructor(
    @Inject(UsersEventsService) private userEventService: UsersEventsService,
    @Inject(UsersService) private userService: UsersService,
    @Inject(ModalsEventsService) private modalsService: ModalsEventsService,
  ) {}

  @Input() user: Users;
  @Input() active: Users;

  ngOnInit() {}

  selectUser(user: Users) {
    if (user !== this.active) {
      this.userEventService.selectUser(user);
    }
  }

  deleteUser(user: Users, e) {
    e.stopPropagation();
    this.modalsService.modalDeleteUser(user);
  }
}
