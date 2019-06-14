import {Component, Inject, OnInit} from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {Users} from '../../data/users/users';
import {UsersEventsService} from '../../services/users/users-events.service';
import {ModalsEventsService} from '../../services/modals/modals-events.service';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {

  users: Array<Users> = [];
  private activeUser = null;

  constructor(
    @Inject(UsersService) private userService: UsersService,
    @Inject(UsersEventsService) private userEventService: UsersEventsService,
    @Inject(ModalsEventsService) private modalsService: ModalsEventsService,
  ) {
  }

  ngOnInit() {
    this.updateUsers();

    this.userEventService.selectUserMessage.subscribe(user =>
      this.activeUser = user
    );

    this.userEventService.updateUsersMessage.subscribe(resp => {
      this.updateUsers();
    });
  }

  modalAddUser() {
    this.modalsService.modalAddUser();
  }

  private updateUsers() {
    this.userService.getUsers.subscribe(users => {
      this.users = users;

      if (users.length) {
        this.userEventService.selectUser(users[0]);
      }
    });
  }
}
