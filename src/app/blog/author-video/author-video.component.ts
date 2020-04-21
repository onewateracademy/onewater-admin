import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/video/service/common.service';

@Component({
  selector: 'app-author-video',
  templateUrl: './author-video.component.html',
  styleUrls: ['./author-video.component.scss']
})
export class AuthorVideoComponent implements OnInit {

  videos;
  constructor(public common:CommonService) { }

  ngOnInit() {
    this.common.getAuthorVideos()
    .subscribe(result=>{
      this.videos=result.result.reverse();
      console.log(this.videos)
    })
  }

}
