import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'event-list',
    loadChildren: './event-list/event-list.module#EventListModule'
  },
  {
    path: 'event-form',
    loadChildren: './event-form/event-form.module#EventFormModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EventsRoutingModule { }
