import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cro-pen-blogs',
  templateUrl: './cro-pen-blogs.component.html',
  styleUrls: ['./cro-pen-blogs.component.scss']
})
export class CroPenBlogsComponent implements OnInit {

  blogs;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-cro.herokuapp.com/notblogs')
    .subscribe(result=> {
      console.log(result);
      this.blogs = result.result;
    })
  }

}
