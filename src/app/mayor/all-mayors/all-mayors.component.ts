import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-mayors',
  templateUrl: './all-mayors.component.html',
  styleUrls: ['./all-mayors.component.scss']
})
export class AllMayorsComponent implements OnInit {

  mayors;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-mayor.herokuapp.com/all-mayor')
    .subscribe(result=> {
      this.mayors = result.result;
    })
  }

}
