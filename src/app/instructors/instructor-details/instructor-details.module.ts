import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorDetailsComponent } from './instructor-details.component';
import { Route, RouterModule } from '@angular/router';
const routes: Route[]=[
    {
    path: '',
    component: InstructorDetailsComponent
    }
]

@NgModule({
declarations: [InstructorDetailsComponent],
exports:[InstructorDetailsComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class InstructorDetailsModule { }
