import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
// import { AuthorVideoDescComponent } from './author-video-desc/author-video-desc.component';
// import { AuthorVideoComponent } from './author-video/author-video.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class BlogModule { }
