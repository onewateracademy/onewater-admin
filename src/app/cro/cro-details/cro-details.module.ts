import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroDetailsComponent } from './cro-details.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CroDetailsComponent
    }
]



@NgModule({
  declarations: [CroDetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class CroDetailsModule { }
