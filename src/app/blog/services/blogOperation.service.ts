import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class BlogOperationService {
  constructor(public http: HttpClient){}

  getNotApprovedBlogs(){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blogapi.herokuapp.com/notblogs');
  }

  getApprovedBlogs(){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blogapi.herokuapp.com/approveblogs');
  }

  getAllBlogs(){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blogapi.herokuapp.com/allblogs');
  }

  getParticularNotBlogs(blogid){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blogapi.herokuapp.com/singlenotappblog/'+blogid);
  }

  getParticularAllBlogs(blogid){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blogapi.herokuapp.com/allblogs/'+blogid);
  }

  getParticularApproveBlogs(blogid){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewater-blogapi.herokuapp.com/singleappblog/'+blogid);
  }

  approve(blogid,mainid,category, subcategory){
    const id={
      mainid:mainid,
      unapproveid:blogid,
      category:category,
      subcategory:subcategory
    }
    console.log('id details',id)
      this.http.post<{status:any,msg:any,result:any}>('https://onewater-blogapi.herokuapp.com/approve-blog',id)
      .subscribe(result=> {
        console.log(result)
        alert(result.msg)
      })
  }

  reject(blogid,mainid){
    const id={
      mainid:mainid,
      id:blogid
    }
      this.http.post<{status:any,msg:any,result:any}>('https://onewater-blogapi.herokuapp.com/reject-blog',id)
      .subscribe(result=> {
        console.log(result)
      })
  }

  deleteApproveBlog(mainid,approveid) {
    const id = {
      mainid : mainid,
      approveid:approveid
    }
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-blogapi.herokuapp.com/deleteapproveblog",id
    );
  }

  deleteUnApproveBlog(mainid,unapproveid) {
    const id = {
      mainid : mainid,
      unapproveid:unapproveid
    }
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-blogapi.herokuapp.com/deleteunapproveblog",id
    );
  }

  deleteApproveBlogByAdmin(mainid,approveid) {
    const id = {
      allid : mainid,
      approveid:approveid
    }
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-blogapi.herokuapp.com/deleteapproveblog",id
    );
  }

  deleteUnApproveBlogByAdmin(mainid,unapproveid) {
    const id = {
      mainid : mainid,
      unapproveid:unapproveid
    }
    return this.http.post<{ status: string; msg: string; result: any }>(
      "https://onewater-blogapi.herokuapp.com/unapprove-blog",id
    );
  }
}
