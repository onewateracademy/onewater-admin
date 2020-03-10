import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list.component';
import { Route, RouterModule } from '@angular/router';
const routes: Route[]=[
    {
    path: '',
    component: EventListComponent
    }
]

@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EventListModule { }
