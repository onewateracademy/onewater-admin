import { Component, OnInit } from '@angular/core';
import { BlogOperationService } from '../services/blogOperation.service';

@Component({
  selector: 'app-pending-blog',
  templateUrl: './pending-blog.component.html',
  styleUrls: ['./pending-blog.component.scss']
})
export class PendingBlogComponent implements OnInit {

  public allblogs;
  constructor(public blogservice:BlogOperationService) { }

  ngOnInit() {
      this.blogservice.getNotApprovedBlogs()
      .subscribe(result=>{
        console.log(result);
        this.allblogs=result.result.reverse();
      })
  }

  delete(id,mainid){
    console.log(id,mainid)

    const data={
      id:id,
      mainid:mainid
    }
    this.blogservice.deleteUnApproveBlogByAdmin(mainid,id)
    .subscribe(result=>{
      console.log(result);
      alert("BLog Deleted Successfully")
    })
  }

}
