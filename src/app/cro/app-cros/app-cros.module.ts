import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCrosComponent } from './app-cros.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: AppCrosComponent
    }
]



@NgModule({
  declarations: [AppCrosComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AppCrosModule { }
