import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms"
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import imageUpload from 'quill-plugin-image-upload';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  htmlStr;
  form:FormGroup;
  id;
  image:FormGroup;
  imagePreview;
  submited:boolean=false;
  constructor(public http:HttpClient, public route:ActivatedRoute) {     this.image= new FormGroup({
    image:new FormControl(null)
  }) }

  config = {
    // toolbar: [
    //   ['bold', 'underline','image']
    // ],
      imageUpload: {
      upload: file => {
        console.log(file)
        // return a Promise that resolves in a link to the uploaded image
        this.image.patchValue({image:file});
        this.image.get('image').updateValueAndValidity();
        console.log('form hit',this.image.value);
        const imageform = new FormData();
        imageform.append('image',this.image.value.image);
        return new Promise((resolve, reject) => {
          this.http.post<{imagepath:any}>('https://onewater-blog-api.herokuapp.com/addimage',imageform)
          .subscribe(result=>{
            console.log('result hit',result);
            resolve(result.imagepath)
          })
        });
      }
    },
  }

  ngOnInit() {
this.route.params.subscribe(result=>{
  this.id=result.id;
})
        // register quill-plugin-image-upload
Quill.register('modules/imageUpload', imageUpload);


    this.form= new FormGroup({
      title:new FormControl(null),
      image:new FormControl(null),
      data:new FormControl(null)
    })
  }

  onImagePick(event:Event){
    const file=( event.target as HTMLInputElement).files[0];
    this.form.patchValue({image:file});
    this.form.get('image').updateValueAndValidity();
    const filereader= new FileReader();
    filereader.onload=()=>{
      this.imagePreview=filereader.result;
    }
    filereader.readAsDataURL(file);
  }

  submit(){
    console.log('hit')
    console.log(this.form.value);
    const data= new FormData();
    data.append('id',this.id)
    data.append('title',this.form.value.title)
    data.append('image',this.form.value.image)
    data.append('desc',this.form.value.data)
    data.append('category','Technology');
    data.append('category','Health');
    this.http.patch('http://localhost:3000/homeblog',data)
    .subscribe(result=>{
      console.log(result);
    })
  }

}
