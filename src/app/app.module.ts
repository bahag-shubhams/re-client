import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventComponent } from './events/event.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { EventUpdateComponent } from './events/event-update.component';
import { EventAddComponent } from './events/event-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './profile/profile.component';
import { AddFormComponent } from './events/add-form.component';
import { FormsModule} from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapViewComponent } from './events/map-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventComponent,
    AboutComponent,
    EventUpdateComponent,
    EventAddComponent,
    ProfileComponent,
    AddFormComponent,
    MapViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule, FormsModule, GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
