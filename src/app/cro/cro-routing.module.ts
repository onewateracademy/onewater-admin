import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'all-blogs',
    loadChildren: './cro-all-blogs/cro-all-blogs.module#CroAllBlogsModule'
  },
  {
    path: 'approved-blogs',
    loadChildren: './cro-app-blogs/cro-app-blogs.module#CroAppBlogsModule'
  },
  {
    path: 'pending-blogs',
    loadChildren: './cro-pen-blogs/cro-pen-blogs.module#CroPenBlogsModule'
  },
  {
    path: 'all-cros',
    loadChildren: './all-cros/all-cros.module#AllCrosModule'
  },
  {
    path: 'pending-cros',
    loadChildren: './pen-cros/pen-cros.module#PenCrosModule'
  },
  {
    path: 'approved-cros',
    loadChildren: './app-cros/app-cros.module#AppCrosModule'
  },
  {
    path: 'crodetails',
    loadChildren: './cro-details/cro-details.module#CroDetailsModule'
  },
  {
    path: 'pendingcrodetails',
    loadChildren: './pending-cro-details/pending-cro-details.module#PendingCroDetailsModule'
  },
  {
    path: 'cro-blogdetails',
    loadChildren: './cro-blogdetails/cro-blogdetails.module#CroBlogdetailsModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CroRoutingModule { }
