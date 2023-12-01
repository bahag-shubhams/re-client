import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './events/event.component';
import { EventAddComponent } from './events/event-add.component';
import { EventUpdateComponent } from './events/event-update.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { HomeComponent } from './users/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: EventsListComponent
  },
  {
    path: 'events',
    component: EventsListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'event/:id',
    component: EventComponent
  },
  {
    path: 'event/:id/add',
    component: EventAddComponent
  },
  {
    path: 'event/:id/update',
    component: EventUpdateComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: EventsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
