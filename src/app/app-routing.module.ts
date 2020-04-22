import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthorVideoComponent } from './blog/author-video/author-video.component';
import { AuthorVideoDescComponent } from './blog/author-video-desc/author-video-desc.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'authorvideo',
    component:AuthorVideoComponent
  },
  {
    path:'authorvideodesc/:id',
    component:AuthorVideoDescComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  {
    path: 'video',
    loadChildren: './video/video.module#VideoModule'
  },
  {
  path: 'blog',
  loadChildren: './blog/blog.module#BlogModule'
},
{
  path: 'events',
  loadChildren: './events/events.module#EventsModule'
},
{
  path: 'mayor',
  loadChildren: './mayor/mayor.module#MayorModule'
},
{
  path: 'cro',
  loadChildren: './cro/cro.module#CroModule'
},
{
  path: 'jobs',
  loadChildren: './jobs/jobs.module#JobsModule'
},
{
  path: 'instructors',
  loadChildren: './instructors/instructors.module#InstructorsModule'
},
{
path: 'subs',
loadChildren: './user-suscribed/user-suscribed.module#UserSuscribedModule'
}
  {
  path: '**',
  redirectTo:'/dashboard',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
