import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './events/event.component';

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
    path: '**',
    component: EventsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
