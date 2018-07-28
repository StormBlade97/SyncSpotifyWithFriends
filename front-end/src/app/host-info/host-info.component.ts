import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-info',
  templateUrl: './host-info.component.html',
  styleUrls: ['./host-info.component.scss']
})
export class HostInfoComponent implements OnInit {

  host = { };

  constructor() { }

  ngOnInit() {
  }

}
