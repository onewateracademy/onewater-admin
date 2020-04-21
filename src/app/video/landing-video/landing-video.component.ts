import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-video',
  templateUrl: './landing-video.component.html',
  styleUrls: ['./landing-video.component.scss']
})
export class LandingVideoComponent implements OnInit {
  video;
  form: FormGroup;
  safeSrc: SafeResourceUrl;
  constructor(public common: CommonService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.form = new FormGroup({
      link: new FormControl(null,{validators:[Validators.required]})
    })
    this.common.getPrimeVideo()
    .subscribe(result=> {
      console.log(result.result.video_link)
      const link=this.getId(result.result.video_link);
      this.video=`https://www.youtube.com/embed/${link}`;
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
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


  getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

}
