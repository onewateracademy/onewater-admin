import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroAppBlogsComponent } from './cro-app-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CroAppBlogsComponent
    }
]



@NgModule({
  declarations: [CroAppBlogsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class CroAppBlogsModule { }
