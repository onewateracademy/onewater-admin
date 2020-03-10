import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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
  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(result=> {
      this.http.get<{status: any, msg: any, result: any}>('https://onewater-mayor.herokuapp.com/notapprovedblogs/'+result.id)
      .subscribe(result=> {
        console.log(result.result[0]);
        this.blog = result.result[0];
      })
    })
  }

  approve(blogid, mainid ){
    console.log(blogid,mainid)
    const id={
      mainid:mainid,
      unapproveid:blogid,
      category:this.category,
      subcategory:this.subcategory
    }
    this.http.post<{status: any, msg: any, result: any}>('https://onewater-mayor.herokuapp.com/approve-blog',id)
    .subscribe(result=> {
      alert(result.msg)
      console.log(result);
    })
  }

  onChange(event){
    // console.log('hitttt');
    this.category=event.target.value;
    const newVal = event.target.value;
    this.showSubcatrgory=newVal;
    console.log(this.category, this.showSubcatrgory)
  }

  onChangesub(event){
    this.subcategory=event.target.value
    console.log(this.category, this.subcategory,'fwfe');
  }

}
