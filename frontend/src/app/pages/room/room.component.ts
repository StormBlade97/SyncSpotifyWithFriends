import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { SocketControllerService } from 'src/app/services/socket-controller.service';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
    host: { name: string; avatar: string };
    participants: Array<{ name: string; avatar: string }>;

    constructor(public users: UserService, public wsController: SocketControllerService) {
        this.host = users.data.host;
        this.participants = users.data.users;
    }
}
