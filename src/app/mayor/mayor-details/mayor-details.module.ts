import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorDetailsComponent } from './mayor-details.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: MayorDetailsComponent
    }
]

@NgModule({
  declarations: [MayorDetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class MayorDetailsModule { }
