import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InstructorsListComponent } from './instructors-list.component';
const routes: Route[]=[
    {
    path: '',
    component: InstructorsListComponent
    }
]

@NgModule({
declarations: [InstructorsListComponent],
exports:[InstructorsListComponent],
imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class InstructorsListModule { }
