import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorBlogdetailsComponent } from './mayor-blogdetails.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: MayorBlogdetailsComponent
    }
]


@NgModule({
  declarations: [MayorBlogdetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class MayorBlogdetailsModule { }
