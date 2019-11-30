import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { PaginaProfileComponent } from './pagina-profile/pagina-profile.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    PaginaLoginComponent,
    ProfileComponent,
    PaginaNotFoundComponent,
    UpcomingEventsComponent,
    FriendRequestComponent,
    PaginaProfileComponent

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
