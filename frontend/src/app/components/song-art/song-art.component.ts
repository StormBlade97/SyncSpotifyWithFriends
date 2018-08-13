import { Component, OnInit } from '@angular/core';
import { SongServiceService } from 'src/app/services/song-service.service';

@Component({
    selector: 'app-song-art',
    templateUrl: './song-art.component.html',
    styleUrls: ['./song-art.component.scss'],
})
export class SongArtComponent implements OnInit {
    constructor(public songService: SongServiceService) {}

    ngOnInit() {}
}
