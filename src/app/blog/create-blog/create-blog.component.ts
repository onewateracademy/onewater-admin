import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import imageUpload from "quill-plugin-image-upload";
import { HttpClient } from "@angular/common/http";
import { ThrowStmt } from "@angular/compiler";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-create-blog",
  templateUrl: "./create-blog.component.html",
  styleUrls: ["./create-blog.component.scss"],
})
export class CreateBlogComponent implements OnInit {
  htmlStr;
  form: FormGroup;
  id;
  image: FormGroup;
  imagePreview;
  submited: boolean = false;
  tinymceInit;
  constructor(public http: HttpClient, public route: ActivatedRoute) {
    this.image = new FormGroup({
      image: new FormControl(null),
    });
  }

  ngOnInit() {
    this.route.params.subscribe((result) => {
      this.id = result.id;
    });

    this.tinymceInit = {
      selector: "textarea",
      height: 500,
      width: 1000,
      plugins: [
        "advlist autolink lists paste image charmap print preview hr anchor pagebreak tinymcespellchecker link",
        "searchreplace wordcount fullscreen",
        "insertdatetime media nonbreaking save ",
      ],
      toolbar:
        "paste | formatselect | bold italic | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | image media pageembed template link anchor codesample |spellchecker language spellcheckdialog",
      browser_spellcheck: true,
      paste_data_images: true,
      image_advtab: true,
      images_upload_handler: function (blobInfo, success, failure) {
        console.log(blobInfo.blob());
        var xhr, formData;
        xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open("POST", "https://onewater-blogapi.herokuapp.com/addimage");
        xhr.onload = function () {
          var json;

          if (xhr.status != 200) {
            failure("HTTP Error: " + xhr.status);
            return;
          }
          json = JSON.parse(xhr.responseText);

          if (!json || typeof json.imagepath != "string") {
            failure("Invalid JSON: " + xhr.responseText);
            return;
          }
          success(json.imagepath);
        };
        formData = new FormData();
        formData.append("image", blobInfo.blob());
        xhr.send(formData);
      },
    };
    this.form = new FormGroup({
      title: new FormControl(null),
      contributor_name: new FormControl(null),
      contributor_company: new FormControl(null),
      image: new FormControl(null),
      data: new FormControl(null),
    });
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const filereader = new FileReader();
    filereader.onload = () => {
      this.imagePreview = filereader.result;
    };
    filereader.readAsDataURL(file);
  }

  submit() {
    console.log("hit");
    console.log(this.form.value);
    const data = new FormData();
    data.append("id", this.id);
    data.append("title", this.form.value.title);
    data.append("image", this.form.value.image);
    data.append("desc", this.form.value.data);
    data.append("category", "Technology");
    data.append("category", "Health");
    this.http
      .patch("https://onewater-blogapi.herokuapp.com/homeblog", data)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
