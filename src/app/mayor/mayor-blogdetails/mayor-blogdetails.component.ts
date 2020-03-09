import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor-blogdetails',
  templateUrl: './mayor-blogdetails.component.html',
  styleUrls: ['./mayor-blogdetails.component.scss']
})
export class MayorBlogdetailsComponent implements OnInit {
  blogid;
  blog;
  author;
  category;
  subcategory;
  showSubcatrgory;
  onChangesub(){};
  onChange(){};
  constructor() { }

  ngOnInit() {
  }

}
