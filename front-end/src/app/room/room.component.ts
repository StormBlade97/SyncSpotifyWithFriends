import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  users = [{ name: 'bob' }, { name: 'judy' }];

  constructor() { }

  ngOnInit() {
  }

}
