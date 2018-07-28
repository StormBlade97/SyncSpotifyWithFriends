import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-thumbnail',
  templateUrl: './user-thumbnail.component.html',
  styleUrls: ['./user-thumbnail.component.scss']
})
export class UserThumbnailComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit() {
  }

}
