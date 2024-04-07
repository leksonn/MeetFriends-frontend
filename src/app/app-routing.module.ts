import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {MeetUpRequestComponent} from './meet-up-request/meet-up-request.component';
import {PendingMeetupRequestsComponent} from './pending-meetup-requests/pending-meetup-requests.component';
import {MeetUpConfirmationComponent} from "./meet-up-confirmation/meet-up-confirmation.component";
import { LoginComponent } from './login/login.component';
import { FriendlistComponent } from './friendlist/friendlist.component';

const routes: Routes = [
  {
    path: "home",
    component: HomepageComponent
  },
  {
  path: "meetup",
  component: MeetUpConfirmationComponent
  },
  {
    path: "request",
    component: MeetUpRequestComponent
  },
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "pending",
    component: PendingMeetupRequestsComponent
  },
  {
    path: "friends",
    component: FriendlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
