import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterRoomComponent } from './enter-room/enter-room.component';
import { HeaderComponent } from './header/header.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoomComponent } from './room/room.component';
import { SongArtComponent } from './song-art/song-art.component';
import { TitleComponent } from './title/title.component';
import { UserThumbnailComponent } from './user-thumbnail/user-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    JoinRoomComponent,
    EnterRoomComponent,
    RoomComponent,
    SongArtComponent,
    TitleComponent,
    UserThumbnailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
