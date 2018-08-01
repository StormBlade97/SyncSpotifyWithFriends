import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
    host: { name: string; avatar: string };
    participants: Array<{ name: string; avatar: string }>;

    constructor(public users: UserService) {
        this.host = users.data.host;
        this.participants = users.data.users;
    }
}
