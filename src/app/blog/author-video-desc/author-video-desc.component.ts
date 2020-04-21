import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/video/service/common.service';

@Component({
  selector: 'app-author-video-desc',
  templateUrl: './author-video-desc.component.html',
  styleUrls: ['./author-video-desc.component.scss']
})
export class AuthorVideoDescComponent implements OnInit {
  video;
  constructor(public common:CommonService, public route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(result=>{
      this.common.getAuthorSingleVideo(result.id)
      .subscribe(result=>{
        this.video=result.result;
        console.log(this.video)
      })
    })

  }


}
