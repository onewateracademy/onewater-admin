import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-video',
  templateUrl: './landing-video.component.html',
  styleUrls: ['./landing-video.component.scss']
})
export class LandingVideoComponent implements OnInit {
  video;
  form: FormGroup;
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.form = new FormGroup({
      link: new FormControl(null,{validators:[Validators.required]})
    })
    this.common.getPrimeVideo()
    .subscribe(result=> {
      console.log(result)
      this.video=result.result
    })
  }

  submit() {
    if(this.form.invalid) {
      return alert("Enter Link");
    }
    this.common.updatePrimeVideo(this.form.value.link)
    .subscribe(result=> {
      console.log(result);
      alert("Video Updated")
    })
  }

}
