import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mayor-all-blogs',
  templateUrl: './mayor-all-blogs.component.html',
  styleUrls: ['./mayor-all-blogs.component.scss']
})
export class MayorAllBlogsComponent implements OnInit {

  blogs;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-mayor.herokuapp.com/allblogs')
    .subscribe(result=> {
      console.log(result)
      this.blogs = result.result;
    })
  }

}
