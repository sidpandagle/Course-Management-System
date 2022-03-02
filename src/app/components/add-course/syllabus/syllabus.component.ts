import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Section } from 'src/app/models/course';
import { ApiService } from 'src/app/services/api.service';
import { MasterdataService } from 'src/app/services/masterdata.service';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css'],
})
export class SyllabusComponent implements OnInit {
  isLoading = false;

  section!: Section;
  sections: any[] = [''];
  response!: Section[];
  sectionAdded = false;

  constructor(
    private api: ApiService,
    public masterData: MasterdataService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.section = {
      courseid: this.masterData.courseid,
      //courseid: 'dkNmMVpFbkNKU3ZVNHpZT3JoUjhVdz09',
      sectionid: '0',
      title: '',
    };
  }

  ngOnInit(): void {}

  addSection(val: any) {
    this.isLoading = true;
    this.masterData.sectiontitle = "val";

    this.api.addSection(this.section).subscribe(
      (res) => {
        this.isLoading = false;
        console.log(res);
        this.masterData.sectionid = res.sectionid;
        this.sectionAdded = true;
        this.isLoading = false;
        let config = new MatSnackBarConfig();
        config.duration = 3000;
        this.snackBar.open(`Successfully added section.`, 'Done', config);
      },
      (err) => {
        this.isLoading = false;
        console.log(err.statusText);
        let config = new MatSnackBarConfig();
        config.duration = 3000;
        this.snackBar.open(err.statusText, err.status, config);
      }
    );
  }

  addSectionInput() {
    this.sections.push(this.section);
  }
}
