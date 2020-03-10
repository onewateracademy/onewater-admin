import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pen-cros',
  templateUrl: './pen-cros.component.html',
  styleUrls: ['./pen-cros.component.scss']
})
export class PenCrosComponent implements OnInit {

  cros;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-cro.herokuapp.com/pending-cro')
    .subscribe(result=> {
      console.log(result);
      this.cros = result.result;
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
