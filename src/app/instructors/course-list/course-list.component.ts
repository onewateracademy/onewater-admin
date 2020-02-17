import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor( public http: HttpClient) { }
  courses;

  ngOnInit() {
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/getcourses')
    .subscribe(result=> {
      this.courses = result.result;
      console.log(this.courses);
    })
  }

  allcourses(){
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/getcourses')
    .subscribe(result=> {
      console.log(result);
      this.courses = result.result
    })
  }

  approvedcourses(){
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/getapprovedcourses')
    .subscribe(result=> {
      console.log(result);
      this.courses = result.result
    })
  }


  pendingcourses(){
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/getpendingcourses')
    .subscribe(result=> {
      console.log(result);
      this.courses = result.result
    })
  }
  approvecourse(id){
    this.http.post<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/updatecoursestatus/',{id:id})
    .subscribe(result=> {
      console.log(result);
      alert(result.msg);
    })
  }
}
