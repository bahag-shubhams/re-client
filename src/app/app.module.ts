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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule} from '@angular/fire/compat'
import { environment } from './environments/environment';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { HomeComponent } from './users/home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';




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
    LoginComponent,
    RegisterComponent,
    HomeComponent,
   
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule, FormsModule, provideFirebaseApp(() => initializeApp({"projectId":"hub-roitraining01-poc-d6aa","appId":"1:1054720178158:web:0731704669c2df7e2300ff","storageBucket":"hub-roitraining01-poc-d6aa.appspot.com","apiKey":"AIzaSyDOamubEmSK3ajQKRk4ZUvbgW-3opRVUJU","authDomain":"hub-roitraining01-poc-d6aa.firebaseapp.com","messagingSenderId":"1054720178158"})), provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
