import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-join-room',
    templateUrl: './join-room.component.html',
    styleUrls: ['./join-room.component.scss'],
})
export class JoinRoomComponent implements OnInit {
    @Input() redirecting;
    constructor() {}

    ngOnInit() {}

    switchToRedirectingView = (event$) => {
        console.log(event$.target);
        this.redirecting.value = true;
    };
}
