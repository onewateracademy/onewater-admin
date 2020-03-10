import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventFormComponent } from './event-form.component';
import { Route, RouterModule } from '@angular/router';
const routes: Route[]=[
    {
    path: '',
    component: EventFormComponent
    }
]

@NgModule({
  declarations: [EventFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class EventFormModule { }
