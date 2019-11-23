import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PendingBlogComponent } from './pending-blog.component';
const routes: Route[]=[
    {
    path: '',
    component: PendingBlogComponent
    }
]

@NgModule({
declarations: [PendingBlogComponent],
exports:[PendingBlogComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PendingBlogModule { }
