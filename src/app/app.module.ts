import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {MeetUpConfirmationComponent} from './meet-up-confirmation/meet-up-confirmation.component';
import {FooterComponent} from './footer/footer.component';
import {AddFriendsComponent} from './add-friends/add-friends.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PendingMeetupRequestsComponent} from "./pending-meetup-requests/pending-meetup-requests.component";
import {MeetUpRequestComponent} from "./meet-up-request/meet-up-request.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {LoginComponent} from "./login/login.component";
import {provideNativeDateAdapter} from "@angular/material/core";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {MeetUpConfirmationServices} from "./sevices/meet-up-confirmation.service";
import {LoginService} from './sevices/login.service';
import {FriendlistService} from "./sevices/friendlist.service";
import {FriendlistComponent} from './friendlist/friendlist.component';
import {RequestService} from "./pending-meetup-requests/pending-meetup-requests.service";
import {AddFriendsService} from "./sevices/add-friends.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MeetUpConfirmationComponent,
        FooterComponent,
        MeetUpRequestComponent,
        PendingMeetupRequestsComponent,
        FriendlistComponent,
        MeetUpRequestComponent,
        EditProfileComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        LoginComponent,
        HomepageComponent,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        LoginComponent,
        AddFriendsComponent,

    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
        provideNativeDateAdapter(),
        MeetUpConfirmationServices,
        RequestService,
        LoginService,
        FriendlistService,
        MeetUpConfirmationServices,
        LoginService,
        AddFriendsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}