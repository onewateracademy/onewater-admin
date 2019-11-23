import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-video-desc',
  templateUrl: './author-video-desc.component.html',
  styleUrls: ['./author-video-desc.component.scss']
})
export class AuthorVideoDescComponent implements OnInit {
  video;
  constructor(public http:HttpClient, public route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(result=>{
      this.http.get<{status:any, msg:any, result:any}>('https://onewater-blog-api.herokuapp.com/video/'+result.id)
      .subscribe(result=>{
        this.video=result.result[0];
        console.log(this.video)
      })
    })

  }


}
