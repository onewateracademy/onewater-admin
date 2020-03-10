import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cro-all-blogs',
  templateUrl: './cro-all-blogs.component.html',
  styleUrls: ['./cro-all-blogs.component.scss']
})
export class CroAllBlogsComponent implements OnInit {

  blogs;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-cro.herokuapp.com/allblogs')
    .subscribe(result=> {
      console.log(result);
      this.blogs = result.result;
    })
  }

}
