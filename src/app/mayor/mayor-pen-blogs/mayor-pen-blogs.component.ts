import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mayor-pen-blogs',
  templateUrl: './mayor-pen-blogs.component.html',
  styleUrls: ['./mayor-pen-blogs.component.scss']
})
export class MayorPenBlogsComponent implements OnInit {
  blogs;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-mayor.herokuapp.com/notapprovedblogs')
    .subscribe(result=> {
      console.log(result)
      this.blogs = result.result;
    })
  }

}
