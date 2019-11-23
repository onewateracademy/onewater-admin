import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LandingBlogsComponent } from './landing-blogs.component';


const routes: Route[]=[
    {
    path: '',
    component: LandingBlogsComponent
    }
]

@NgModule({
declarations: [LandingBlogsComponent],
exports:[LandingBlogsComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})

export class LandingBlogsModule { }
