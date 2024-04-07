import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {MeetUpConfirmationComponent} from './meet-up-confirmation/meet-up-confirmation.component';
import {FooterComponent} from './footer/footer.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MeetUpRequestComponent} from './meet-up-request/meet-up-request.component';
//these work only on here for now; might move after first merge:
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {PendingMeetupRequestsComponent} from './pending-meetup-requests/pending-meetup-requests.component';
import {MatListModule} from '@angular/material/list';
import {requestService} from './pending-meetup-requests/pending-meetup-requests.service';
import {MeetUpConfirmationServices} from "./sevices/meet-up-confirmation.service";
import { LoginComponent } from './login/login.component';
import { LoginService } from './sevices/login.service';
import {FriendlistService} from "./sevices/friendlist.service";
import { FriendlistComponent } from './friendlist/friendlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeetUpConfirmationComponent,
    FooterComponent,
    MeetUpRequestComponent,
    PendingMeetupRequestsComponent,
    FriendlistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageComponent,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    LoginComponent,

  ],
  providers: [
      provideNativeDateAdapter(),
    provideClientHydration(),
    provideAnimationsAsync(),
    MeetUpConfirmationServices,
    requestService,
    LoginService,
    FriendlistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }