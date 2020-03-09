import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PenCrosComponent } from './pen-cros.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: PenCrosComponent
    }
]


@NgModule({
  declarations: [PenCrosComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PenCrosModule { }
