import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mayor-app-blogs',
  templateUrl: './mayor-app-blogs.component.html',
  styleUrls: ['./mayor-app-blogs.component.scss']
})
export class MayorAppBlogsComponent implements OnInit {

  blogs;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-mayor.herokuapp.com/approveblogs')
    .subscribe(result=> {
      console.log(result.result);
      this.blogs = result.result;
    })
  }

}
