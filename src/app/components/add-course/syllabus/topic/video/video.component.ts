import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  constructor(private api: ApiService) {}
  videoUrl!: any;
  videoSelected = false;
  file: any;

  ngOnInit(): void {}

  uploadVideo() {
    const payload = new FormData();
    console.log(this.file);
    payload.append('image', this.file, this.file.name);
    this.api.addTopicMedia(payload).subscribe((res) => {
      console.log(res);
    });
  }

  onSelectFile(event: any) {
    this.file = event.target.files && event.target.files[0];
    if (this.file) {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (event) => {
        this.videoUrl = (<FileReader>event.target).result;
      };
    }
    this.videoSelected = true;
  }
}
