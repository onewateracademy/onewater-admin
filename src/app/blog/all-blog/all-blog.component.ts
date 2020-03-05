import { Component, OnInit } from '@angular/core';
import { BlogOperationService } from '../services/blogOperation.service';
import { AuthorOperationService } from '../services/authorOperation.service';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.scss']
})
export class AllBlogComponent implements OnInit {

  public allblogs;
  author;
  constructor(public blogservice:BlogOperationService, public authorservice:AuthorOperationService,) { }

  ngOnInit() {
      this.blogservice.getAllBlogs()
      .subscribe(result=>{
        console.log(result);
        this.allblogs=result.result.reverse();
      })
  }

  deleteApproveBlog(main_id,approved_id) {
    console.log(main_id,approved_id)
    this.blogservice.deleteApproveBlog(main_id,approved_id)
    .subscribe(result=> {
      alert("Blog Deleted Successfully");
    })
  }

  deleteUnApproveBlog(main_id,unapproved_id) {
    console.log(main_id,unapproved_id)
    this.blogservice.deleteUnApproveBlog(main_id,unapproved_id)
    .subscribe(result=> {
      alert("Blog Deleted Successfully");
    })
  }

}
