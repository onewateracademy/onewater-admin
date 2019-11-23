import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AdminBlogdetailsComponent } from './admin-blogdetails.component';


const routes: Route[]=[
    {
    path: '',
    component: AdminBlogdetailsComponent
    }
]

@NgModule({
declarations: [AdminBlogdetailsComponent],
exports:[AdminBlogdetailsComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})

export class AdminBlogdetailsModule { }
