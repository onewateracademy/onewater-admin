import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-cros',
  templateUrl: './all-cros.component.html',
  styleUrls: ['./all-cros.component.scss']
})
export class AllCrosComponent implements OnInit {

  cros;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-cro.herokuapp.com/all-cro')
    .subscribe(result=> {
      this.cros = result.result;
    })
  }

}
