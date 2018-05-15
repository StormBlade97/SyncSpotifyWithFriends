import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterRoomComponent } from './enter-room/enter-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  { path: 'join',   component: JoinRoomComponent },
  { path: 'enter',  component: EnterRoomComponent },
  { path: 'room',   component: RoomComponent },
  { path: '',  redirectTo: '/join',  pathMatch: 'full' },
  { path: '**',     component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }  // only for debugging!
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
