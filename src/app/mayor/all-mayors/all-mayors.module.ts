import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMayorsComponent } from './all-mayors.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: AllMayorsComponent
    }
]


@NgModule({
  declarations: [AllMayorsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})

export class AllMayorsModule { }
