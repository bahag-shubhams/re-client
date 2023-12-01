import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './events/event.component';
import { EventAddComponent } from './events/event-add.component';
import { EventUpdateComponent } from './events/event-update.component';
import { ProfileComponent } from './profile/profile.component';
import { MapViewComponent } from './events/map-view.component';

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
    path: 'map-view',
    component: MapViewComponent
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
    path: '**',
    component: EventsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
