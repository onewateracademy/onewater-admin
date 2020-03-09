import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PenMayorsComponent } from './pen-mayors.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: PenMayorsComponent
    }
]


@NgModule({
  declarations: [PenMayorsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PenMayorsModule { }
