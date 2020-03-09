import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroPenBlogsComponent } from './cro-pen-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CroPenBlogsComponent
    }
]


@NgModule({
  declarations: [CroPenBlogsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class CroPenBlogsModule { }
