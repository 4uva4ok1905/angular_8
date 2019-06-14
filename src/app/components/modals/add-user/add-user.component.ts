import {Component, Inject, OnInit} from '@angular/core';
import {ModalsEventsService} from '../../../services/modals/modals-events.service';
import {UsersService} from '../../../services/users/users.service';
import {UsersEventsService} from '../../../services/users/users-events.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  name = '';
  visible = false;

  constructor(
    @Inject(ModalsEventsService) private modalsService: ModalsEventsService,
    @Inject(UsersService) private userService: UsersService,
    @Inject(UsersEventsService) private userEventService: UsersEventsService,
  ) {
  }

  ngOnInit() {
    this.modalsService.modalAddUserMessage.subscribe(modal => {
      this.visible = true;
    });
  }

  saveUser() {
    this.userService.addUser(this.name).subscribe(resp => {
      this.userEventService.updateUsers();
      this.visible = false;
      this.name = '';
    });
  }
}
