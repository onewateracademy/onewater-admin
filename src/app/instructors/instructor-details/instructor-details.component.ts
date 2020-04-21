import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.scss']
})
export class InstructorDetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public http: HttpClient) { }
  instructorid;
  instructor;
  courses;

  ngOnInit() {
    this.route.params.subscribe(result =>{
      console.log(result);
      this.instructorid = result.id
      this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/get-registeredinstructor/'+this.instructorid)
      .subscribe(result=> {
        this.instructor = result.result;
        console.log(this.instructor);
      })
    })


    // this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/getinstructorcourses/'+this.instructorid)
    // .subscribe(result=> {
    //   this.courses = result.result;
    //   console.log(this.courses);
    // })
  }

  // approvecourse(id){
  //   this.http.post<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/updatecoursestatus/',{id:id})
  //   .subscribe(result=> {
  //     console.log(result);
  //     alert(result.msg);
  //   })
  // }

}
