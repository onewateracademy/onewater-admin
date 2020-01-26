import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-blogs',
  templateUrl: './landing-blogs.component.html',
  styleUrls: ['./landing-blogs.component.scss']
})
export class LandingBlogsComponent implements OnInit {
landingblogs = [
  {
    title:'Blog 1',
    image:'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category:'Research & Development',
    date_added:'2019-11-04T15:42:34.024Z'
  },
  {
    title:'Blog 2',
    image:'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    category:'Wastewater',
    date_added:'2019-12-04T15:42:34.024Z'
  },
  {
    title:'Blog 3',
    image:'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category:'Water',
    date_added:'2019-11-04T15:42:34.024Z'
  }
]
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/homeblog')
    .subscribe(result=>{
      console.log(result);
        this.landingblogs=result.result
    })
  }

}
