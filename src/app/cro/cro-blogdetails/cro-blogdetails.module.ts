import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CroBlogdetailsComponent } from './cro-blogdetails.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: CroBlogdetailsComponent
    }
]



@NgModule({
  declarations: [CroBlogdetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class CroBlogdetailsModule { }
