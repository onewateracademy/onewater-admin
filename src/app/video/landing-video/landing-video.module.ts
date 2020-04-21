import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingVideoComponent } from './landing-video.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: LandingVideoComponent
    }
]



@NgModule({
  declarations: [LandingVideoComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class LandingVideoModule { }
