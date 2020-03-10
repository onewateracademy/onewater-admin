import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cro-details',
  templateUrl: './cro-details.component.html',
  styleUrls: ['./cro-details.component.scss']
})
export class CroDetailsComponent implements OnInit {
  cro;
  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      this.http.get<{status: any, msg: any, result: any}>('https://onewater-cro.herokuapp.com/all-cro/'+result.id)
      .subscribe(result=> {
        console.log(result.result[0]);
        this.cro = result.result[0];
      })
    })
  }

}
