import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-author-video',
  templateUrl: './author-video.component.html',
  styleUrls: ['./author-video.component.scss']
})
export class AuthorVideoComponent implements OnInit {

  videos;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-blog-api.herokuapp.com/video')
    .subscribe(result=>{
      this.videos=result.result.reverse();
      console.log(this.videos)
    })
  }

}
