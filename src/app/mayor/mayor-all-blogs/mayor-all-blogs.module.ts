import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorAllBlogsComponent } from './mayor-all-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: MayorAllBlogsComponent
    }
]


@NgModule({
  declarations: [MayorAllBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class MayorAllBlogsModule { }
