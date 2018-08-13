import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SongServiceService {
    currentlyPlayingSong = {
        title: 'Animal',
        artist: 'Miike Snow',
        albumCover:
            'https://is3-ssl.mzstatic.com/image/thumb/Music/d3/b7/ed/mzi.atjjtrae.jpg/1200x630bb.jpg',
    };
    constructor() {}
}
