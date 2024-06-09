import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MeetUpConfirmationComponent } from './meet-up-confirmation/meet-up-confirmation.component';
import { FooterComponent } from './footer/footer.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PendingMeetupRequestsComponent } from "./pending-meetup-requests/pending-meetup-requests.component";
import { MeetUpRequestComponent } from "./meet-up-request/meet-up-request.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { provideNativeDateAdapter } from "@angular/material/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MeetUpConfirmationServices } from "./sevices/meet-up-confirmation.service";
import { LoginService } from './sevices/login.service';
import { FriendlistService } from "./sevices/friendlist.service";
import { FriendlistComponent } from './friendlist/friendlist.component';
import { RequestService } from "./pending-meetup-requests/pending-meetup-requests.service";
import { AddFriendsService } from "./sevices/add-friends.service";
import { HttpClientModule } from "@angular/common/http";
import { ScheduleService } from "./sevices/schedule.service";
import { AddFriendsComponent } from "./add-friends/add-friends.component";
import { LoginComponent } from "./login/login.component";
import { HomepageComponent } from './homepage/homepage.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DateFilterPipe } from "./pipes/date-filter.pipe";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MeetUpConfirmationComponent,
        FooterComponent,
        EditProfileComponent,
        PendingMeetupRequestsComponent,
        MeetUpRequestComponent,
        FriendlistComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        AddFriendsComponent, // Import standalone component
        LoginComponent, // Import standalone component
        HomepageComponent, // Import standalone component
        ScheduleComponent, // Import standalone component
        DateFilterPipe // Import standalone pipe
    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
        provideNativeDateAdapter(),
        MeetUpConfirmationServices,
        RequestService,
        LoginService,
        FriendlistService,
        AddFriendsService,
        ScheduleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }