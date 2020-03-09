import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorPenBlogsComponent } from './mayor-pen-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: MayorPenBlogsComponent
    }
]



@NgModule({
  declarations: [MayorPenBlogsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class MayorPenBlogsModule { }
