import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RoomComponent } from './pages/room/room.component';

const routes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'room', component: RoomComponent },
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
@NgModule({
    imports: [
        RouterModule.forRoot(
            routes
            // { enableTracing: true }  // only for debugging!
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
