import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-mayors',
  templateUrl: './app-mayors.component.html',
  styleUrls: ['./app-mayors.component.scss']
})
export class AppMayorsComponent implements OnInit {
  mayors;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-mayor.herokuapp.com/approvedmayor')
    .subscribe(result=> {
      console.log(result)
      this.mayors = result.result;
    })
  }

}
