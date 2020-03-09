import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'all-blogs',
    loadChildren: './mayor-all-blogs/mayor-all-blogs.module#MayorAllBlogsModule'
  },
  {
    path: 'approved-blogs',
    loadChildren: './mayor-app-blogs/mayor-app-blogs.module#MayorAppBlogsModule'
  },
  {
    path: 'pending-blogs',
    loadChildren: './mayor-pen-blogs/mayor-pen-blogs.module#MayorPenBlogsModule'
  },
  {
    path: 'all-mayors',
    loadChildren: './all-mayors/all-mayors.module#AllMayorsModule'
  },
  {
    path: 'pending-mayors',
    loadChildren: './pen-mayors/pen-mayors.module#PenMayorsModule'
  },
  {
    path: 'approved-mayors',
    loadChildren: './app-mayors/app-mayors.module#AppMayorsModule'
  },
  {
    path: 'mayordetails',
    loadChildren: './mayor-details/mayor-details.module#MayorDetailsModule'
  },
  {
    path: 'pendingmayordetails',
    loadChildren: './pending-mayor-details/pending-mayor-details.module#PendingMayorDetailsModule'
  },
  {
    path: 'mayor-blogdetails',
    loadChildren: './mayor-blogdetails/mayor-blogdetails.module#MayorBlogdetailsModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayorRoutingModule { }
