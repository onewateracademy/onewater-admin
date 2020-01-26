import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogOperationService } from '../services/blogOperation.service';
import { HttpClient } from '@angular/common/http';
import { AuthorOperationService } from '../services/authorOperation.service';

@Component({
  selector: 'app-admin-blogdetails',
  templateUrl: './admin-blogdetails.component.html',
  styleUrls: ['./admin-blogdetails.component.scss']
})
export class AdminBlogdetailsComponent implements OnInit {


  constructor(public route:ActivatedRoute, public blogservice:BlogOperationService, public http:HttpClient, public authorservice:AuthorOperationService) { }
blogid;
blog;
author;
  ngOnInit() {
    this.route.params.subscribe(result=>{
      this.blogid=result.id
      console.log(this.blogid)

      this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/homeblog/'+this.blogid)
      .subscribe(result=>{
        console.log(result)
        this.blog=result.result[0];
      })
    })
  }

}
