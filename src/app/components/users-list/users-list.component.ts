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

  private users: Array<Users> = [];
  private activeUser = null;
  private click = false;

  constructor(
    @Inject(UsersService) private userService: UsersService,
    @Inject(UsersEventsService) private userEventService: UsersEventsService,
    @Inject(ModalsEventsService) private modalsService: ModalsEventsService,
  ) {
  }

  ngOnInit() {
    this.updateUsersList();

    this.userEventService.selectUserMessage.subscribe(user =>
      this.activeUser = user
    );

    this.userEventService.deleteUserMessage.subscribe(user => {
      this.userService.deleteUser(user).subscribe(resp => {
        if (user === this.activeUser) { this.activeUser = null; }
        this.updateUsersList();
      });
    });
  }

  modalAddUser() {
    this.modalsService.modalAddUser();
  }

  private updateUsersList() {
    this.userService.getUsers.subscribe(users => {
      this.users = users;

      if (users.length > 0 && this.activeUser == null) {
        this.userEventService.selectUser(users[0]);
      }
    });
  }
}
