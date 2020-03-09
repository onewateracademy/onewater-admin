import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorAppBlogsComponent } from './mayor-app-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: MayorAppBlogsComponent
    }
]



@NgModule({
  declarations: [MayorAppBlogsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})

export class MayorAppBlogsModule { }
