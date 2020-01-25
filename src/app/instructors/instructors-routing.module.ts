import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: './instructors-list/instructors-list.module#InstructorsListModule'
  },
  {
    path: 'details',
    loadChildren: './instructor-details/instructor-details.module#InstructorDetailsModule'
  },
  {
    path: 'courses',
    loadChildren: './course-list/course-list.module#CourseListModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorsRoutingModule { }
