import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogOperationService } from '../services/blogOperation.service';
import { HttpClient } from '@angular/common/http';
import { AuthorOperationService } from '../services/authorOperation.service';
@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})
export class BlogdetailsComponent implements OnInit {

  constructor(public route:ActivatedRoute, public blogservice:BlogOperationService, public http:HttpClient, public authorservice:AuthorOperationService) { }
blogid;
blog;
author;
category;
subcategory;
showSubcatrgory;
  ngOnInit() {
    this.route.params.subscribe(result=>{
      this.blogid=result.id
      console.log(this.blogid)
      this.blogservice.getParticularAllBlogs(this.blogid)
      .subscribe(result=>{
        console.log(result);
        this.blog=result.result[0];
        this.getauthor(this.blog.author_id)
        console.log(this.blog);
      })
    })
  }

  getauthor(id){
    this.authorservice.getSingleApprovedAuthor(id)
    .subscribe(result=> {
      console.log(result,'fce')
      this.author=result.result[0];
    })
  }

  approve(blogid,mainid){
    console.log(blogid,mainid);
    this.blogservice.approve(blogid,mainid, this.category, this.subcategory);
    alert("Blog Approved");
  }

  reject(blogid,mainid){
    console.log(blogid,mainid);
    this.blogservice.reject(blogid,mainid);
    alert("Blog Rejected");
  }

  onChange(event){
    // console.log('hitttt');
    this.category=event.target.value;
    const newVal = event.target.value;
    this.showSubcatrgory=newVal;
    console.log(this.category, this.showSubcatrgory)
  }

  onChangesub(event){
    this.subcategory=event.target.value
    console.log(this.category, this.subcategory,'fwfe');
  }
}
