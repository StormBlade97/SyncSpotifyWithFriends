import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-host-info',
  templateUrl: './host-info.component.html',
  styleUrls: ['./host-info.component.scss']
})
export class HostInfoComponent implements OnInit {

  @Input() host;

  constructor() { }

  ngOnInit() {
  }

}
