import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pen-mayors',
  templateUrl: './pen-mayors.component.html',
  styleUrls: ['./pen-mayors.component.scss']
})
export class PenMayorsComponent implements OnInit {

  mayors;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-mayor.herokuapp.com/pending-mayor')
    .subscribe(result=> {
      this.mayors = result.result;
    })
  }

}
