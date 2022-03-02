import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MasterdataService } from 'src/app/services/masterdata.service';

@Component({
  selector: 'app-topic-material',
  templateUrl: './topic-material.component.html',
  styleUrls: ['./topic-material.component.css'],
})
export class TopicMaterialComponent implements OnInit {
  isLoading = false;
  formSubmitted = false;
  filesSelected = false;
  // selectedFile: any;
  selectedFile!: FileList;
  url: any;
  preview: any[] = [];
  constructor(
    private api: ApiService,
    private masterData: MasterdataService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  uploadFiles() {
    // this.isLoading = true;
    // this.formSubmitted = true;
    const payload = new FormData();
    // payload.append('image', this.selectedFile, this.selectedFile.name); //single file
    for (let i = 0; i < this.selectedFile.length; i++) {
      payload.append('image', this.selectedFile[i], this.selectedFile[i].name);
      console.log(this.selectedFile[i].name, this.selectedFile[i]);
    }
    this.api.addTopicMedia(payload).subscribe((res) => {
      console.log(res);
    });
  }

  onFileSelected(val: any) {
    this.filesSelected = true;
    this.selectedFile = val.target.files; //selectedFile: any[]=[];
    for (let i = 0; i < this.selectedFile.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(this.selectedFile[i]);
      reader.onload = (event) => {
        this.preview.push((<FileReader>event.target).result);
      };
    }
  }
}
