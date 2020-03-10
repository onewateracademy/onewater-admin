import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pending-cro-details',
  templateUrl: './pending-cro-details.component.html',
  styleUrls: ['./pending-cro-details.component.scss']
})
export class PendingCroDetailsComponent implements OnInit {
  cro;
  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      this.http.get<{status: any, msg: any, result: any}>('https://onewater-cro.herokuapp.com/pending-cro/'+result.id)
      .subscribe(result=> {
        console.log(result.result[0]);
        this.cro = result.result[0];
      })
    })
  }
  approve(blogid, mainid ){
    console.log(blogid,mainid)
    this.http.post<{status: any, msg: any, result: any}>('https://onewater-cro.herokuapp.com/approve-cro',{id: blogid, mainid: mainid})
    .subscribe(result=> {
      alert(result.msg)
      console.log(result);
    })
  }

  reject(blogid, mainid){
    console.log(blogid,mainid)
    this.http.post<{status: any, msg: any, result: any}>('https://onewater-cro.herokuapp.com/reject-cro',{id: blogid, mainid: mainid})
    .subscribe(result=> {
      alert(result.msg)
      console.log(result);
    })
  }

}
