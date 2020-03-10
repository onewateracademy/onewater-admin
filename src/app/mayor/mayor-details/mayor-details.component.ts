import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mayor-details',
  templateUrl: './mayor-details.component.html',
  styleUrls: ['./mayor-details.component.scss']
})
export class MayorDetailsComponent implements OnInit {
  mayor;
  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      this.http.get<{status: any, msg: any, result: any}>('https://onewater-mayor.herokuapp.com/all-mayor/'+result.id)
      .subscribe(result=> {
        console.log(result.result[0]);
        this.mayor = result.result[0];
      })
    })
  }

}
