import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { ProfileComponent } from './profile/profile.component';
import { PaginaProfileComponent } from './pagina-profile/pagina-profile.component';


const routes: Routes = [
  
  {path:"login", component:PaginaLoginComponent},
  {path:"profile", component:ProfileComponent},
  {path:"pagina-profile", component:PaginaProfileComponent},
  {path:"upcomingevents", component:UpcomingEventsComponent},
  {path:"friendsrequest", component:FriendRequestComponent},
  {path:"", redirectTo:"/login", pathMatch: "full"},
  {path:"**", component:PaginaNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
