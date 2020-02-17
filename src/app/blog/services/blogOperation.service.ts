import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class BlogOperationService {
  constructor(public http: HttpClient){}

  getNotApprovedBlogs(){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewateracademy-blogapi.herokuapp.com/notblogs');
  }

  getApprovedBlogs(){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewateracademy-blogapi.herokuapp.com/approveblogs');
  }

  getAllBlogs(){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewateracademy-blogapi.herokuapp.com/allblogs');
  }

  getParticularNotBlogs(blogid){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewateracademy-blogapi.herokuapp.com/singlenotappblog/'+blogid);
  }

  getParticularAllBlogs(blogid){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewateracademy-blogapi.herokuapp.com/allblogs/'+blogid);
  }

  getParticularApproveBlogs(blogid){
    return this.http.get<{status:any,msg:any,result:any}>('https://onewateracademy-blogapi.herokuapp.com/singleappblog/'+blogid);
  }

  approve(blogid,mainid,category, subcategory){
    const id={
      mainid:mainid,
      id:blogid,
      category:category,
      subcategory:subcategory
    }
      this.http.post<{status:any,msg:any,result:any}>('https://onewateracademy-blogapi.herokuapp.com/approve-blog',id)
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
      this.http.post<{status:any,msg:any,result:any}>('https://onewateracademy-blogapi.herokuapp.com/reject-blog',id)
      .subscribe(result=> {
        console.log(result)
      })
  }
}
