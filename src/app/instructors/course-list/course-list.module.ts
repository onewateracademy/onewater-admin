import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { Route, RouterModule } from '@angular/router';
const routes: Route[]=[
    {
    path: '',
    component: CourseListComponent
    }
]

@NgModule({
declarations: [CourseListComponent],
exports:[CourseListComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CourseListModule { }
