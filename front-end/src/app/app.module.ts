import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoomComponent } from './room/room.component';
import { SongArtComponent } from './song-art/song-art.component';
import { TitleComponent } from './title/title.component';
import { UserThumbnailComponent } from './user-thumbnail/user-thumbnail.component';
import { HostInfoComponent } from './host-info/host-info.component';
import { RoomUsersComponent } from './room-users/room-users.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PageNotFoundComponent,
        JoinRoomComponent,
        RoomComponent,
        SongArtComponent,
        TitleComponent,
        UserThumbnailComponent,
        HostInfoComponent,
        RoomUsersComponent,
        LandingComponent,
    ],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
