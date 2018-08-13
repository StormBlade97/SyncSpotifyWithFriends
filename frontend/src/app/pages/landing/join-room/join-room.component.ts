import { Component, OnInit, Input } from '@angular/core';
import { SongServiceService } from 'src/app/services/song-service.service';

@Component({
    selector: 'app-join-room',
    templateUrl: './join-room.component.html',
    styleUrls: ['./join-room.component.scss'],
})
export class JoinRoomComponent implements OnInit {
    @Input() redirecting;
    constructor(public songService: SongServiceService) {}

    ngOnInit() {}

    switchToRedirectingView = (event$) => {
        this.redirecting.value = true;
    }
}
