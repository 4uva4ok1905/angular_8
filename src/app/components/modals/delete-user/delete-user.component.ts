import {Component, Inject, OnInit} from '@angular/core';
import {UsersEventsService} from '../../../services/users/users-events.service';
import {UsersService} from '../../../services/users/users.service';
import {ModalsEventsService} from '../../../services/modals/modals-events.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  visible = false;
  private user = null;

  constructor(
    @Inject(UsersEventsService) private userEventService: UsersEventsService,
    @Inject(UsersService) private userService: UsersService,
    @Inject(ModalsEventsService) private modalsService: ModalsEventsService,
  ) { }

  ngOnInit() {
    this.modalsService.modalDeleteUserMessage.subscribe(user => {
      this.visible = true;
      this.user = user;
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.user).subscribe(resp => {
      this.userEventService.updateUsers();
      this.visible = false;
    });
  }
}
