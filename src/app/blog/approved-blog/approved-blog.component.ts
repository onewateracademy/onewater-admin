import { Component, OnInit } from '@angular/core';
import { BlogOperationService } from '../services/blogOperation.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-approved-blog',
  templateUrl: './approved-blog.component.html',
  styleUrls: ['./approved-blog.component.scss']
})
export class ApprovedBlogComponent implements OnInit {
  public allblogs;
  constructor(public blogservice:BlogOperationService, public http:HttpClient) { }

  ngOnInit() {
      this.blogservice.getApprovedBlogs()
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
    this.http.post('http://localhost:3000/approvedblog',data)
    .subscribe(result=>{
      console.log(result);
      alert("BLog Deleted Successfully")
    })
  }

}
