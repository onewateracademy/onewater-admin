import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cro-app-blogs',
  templateUrl: './cro-app-blogs.component.html',
  styleUrls: ['./cro-app-blogs.component.scss']
})
export class CroAppBlogsComponent implements OnInit {

  blogs;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-cro.herokuapp.com/approveblogs')
    .subscribe(result=> {
      console.log(result);
      this.blogs = result.result;
    })
  }

}
