import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-users',
  templateUrl: './room-users.component.html',
  styleUrls: ['./room-users.component.scss']
})
export class RoomUsersComponent implements OnInit {

  @Input() users;

  constructor() { }

  ngOnInit() {
  }

}
