import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  event;
  imagePreview;
  submited: boolean = false;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.event = new FormGroup({
      name: new FormControl(null, { validators: [Validators.required] }),
      desc: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, { validators: [Validators.required] }),
      date_of_event: new FormControl(null, { validators: [Validators.required] }),
      link: new FormControl(null, { validators: [Validators.required] })
    });
  }

  onImagePick(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    console.log(file.type.includes('image'));
    if(!file.type.includes('image')) {
      return alert("Only image is supported");
    }
    this.event.patchValue({ image: file });
    this.event.get("image").updateValueAndValidity();
    const filereader = new FileReader();
    filereader.onload = () => {
      this.imagePreview = filereader.result;
    };
    filereader.readAsDataURL(file);
  }

  addEvent() {
    this.submited = true;
    console.log(this.event.value);
    if(this.event.invalid) {
      return
    }
    console.log(this.event.value);

    const data = new FormData();
    data.append('name',this.event.value.name);
    data.append('desc',this.event.value.desc);
    data.append('image',this.event.value.image);
    data.append('date_of_event',this.event.value.date_of_event);
    data.append('link',this.event.value.link);

    this.http.post('https://onewater-auth.herokuapp.com/event',data)
    .subscribe(result=> {
      console.log(result);
      this.event.reset();
      this.imagePreview=null;
    })
  }

}
