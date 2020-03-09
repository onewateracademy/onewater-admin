import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingMayorDetailsComponent } from './pending-mayor-details.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: PendingMayorDetailsComponent
    }
]



@NgModule({
  declarations: [PendingMayorDetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PendingMayorDetailsModule { }
