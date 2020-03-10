import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pending-mayor-details',
  templateUrl: './pending-mayor-details.component.html',
  styleUrls: ['./pending-mayor-details.component.scss']
})
export class PendingMayorDetailsComponent implements OnInit {
  mayor;
  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      this.http.get<{status: any, msg: any, result: any}>('https://onewater-mayor.herokuapp.com/pending-mayor/'+result.id)
      .subscribe(result=> {
        console.log(result.result[0]);
        this.mayor = result.result[0];
      })
    })
  }

  approve(blogid, mainid ){
    console.log(blogid,mainid)
    this.http.post<{status: any, msg: any, result: any}>('https://onewater-mayor.herokuapp.com/approve-mayor',{id: blogid, mainid: mainid})
    .subscribe(result=> {
      alert(result.msg)
      console.log(result);
    })
  }

  reject(blogid, mainid){
    console.log(blogid,mainid)
    this.http.post<{status: any, msg: any, result: any}>('https://onewater-mayor.herokuapp.com/reject-cro',{id: blogid, mainid: mainid})
    .subscribe(result=> {
      alert(result.msg)
      console.log(result);
    })
  }

}
