import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-cros',
  templateUrl: './app-cros.component.html',
  styleUrls: ['./app-cros.component.scss']
})
export class AppCrosComponent implements OnInit {

  cros;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-cro.herokuapp.com/approvedcro')
    .subscribe(result=> {
      console.log(result);
      this.cros = result.result;
    })
  }

}
