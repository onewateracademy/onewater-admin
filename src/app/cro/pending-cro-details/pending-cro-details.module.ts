import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingCroDetailsComponent } from './pending-cro-details.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: PendingCroDetailsComponent
    }
]



@NgModule({
  declarations: [PendingCroDetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PendingCroDetailsModule { }
