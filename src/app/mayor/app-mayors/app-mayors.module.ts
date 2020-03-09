import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMayorsComponent } from './app-mayors.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: AppMayorsComponent
    }
]



@NgModule({
  declarations: [AppMayorsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})

export class AppMayorsModule { }
