import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-instructors-list',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.scss']
})
export class InstructorsListComponent implements OnInit {

  constructor(public http: HttpClient) { }

  instructors;

  ngOnInit() {
    console.log('inst hit')
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/getinstructor')
    .subscribe(result=> {
      console.log(result);
      this.instructors = result.result
    })
  }

  allinstructor(){
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/getinstructor')
    .subscribe(result=> {
      console.log(result);
      this.instructors = result.result
    })
  }

  approvedinstructor(){
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/getapprovedinstructor')
    .subscribe(result=> {
      console.log(result);
      this.instructors = result.result
    })
  }


  pendinginstructor(){
    this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/getpendinginstructor')
    .subscribe(result=> {
      console.log(result);
      this.instructors = result.result
    })
  }

  approveinstructor(id, email){
    this.http.post<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/updateinstructorprofile',{email:email, id:id})
    .subscribe(result=> {
      console.log(result);
      this.instructors = result.result;
    })
  }
}
