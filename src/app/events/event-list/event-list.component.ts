import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get<{status: any, msg: any, result: any}>('https://onewater-auth.herokuapp.com/all-event')
    .subscribe(result=> {
      console.log(result);
      this.events = result.result
    })
  }

}
