import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RoomComponent } from './pages/room/room.component';
import { TitleBarComponent } from './pages/room/title-bar/title-bar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { JoinRoomComponent } from './pages/landing/join-room/join-room.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { HeaderComponent } from './components/header/header.component';
import { SongArtComponent } from './components/song-art/song-art.component';
import { TitleComponent } from './components/title/title.component';
import { HostInfoComponent } from './components/host-info/host-info.component';
import { RoomUsersComponent } from './components/room-users/room-users.component';
import { UserService } from './services/user.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PageNotFoundComponent,
        JoinRoomComponent,
        RoomComponent,
        SongArtComponent,
        TitleComponent,
        HostInfoComponent,
        RoomUsersComponent,
        LandingComponent,
        TitleBarComponent,
    ],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    providers: [UserService],
    bootstrap: [AppComponent],
})
export class AppModule {}
