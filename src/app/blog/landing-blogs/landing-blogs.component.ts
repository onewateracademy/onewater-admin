import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-blogs',
  templateUrl: './landing-blogs.component.html',
  styleUrls: ['./landing-blogs.component.scss']
})
export class LandingBlogsComponent implements OnInit {
landingblogs
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-blogapi.herokuapp.com/homeblog')
    .subscribe(result=>{
      console.log(result);
        this.landingblogs=result.result
    })
  }

}
