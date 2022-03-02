import { AuthService } from './../../../services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CourseModel } from 'src/app/models/course';
import { ApiService } from 'src/app/services/api.service';
import { MasterdataService } from 'src/app/services/masterdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  formSubmitted = false;
  isLoading = false;
  course!: CourseModel;

  levelData: any;
  categoryData: any;
  coursestatusData: any;

  response: any;

  constructor(
    private api: ApiService,
    private masterDataService: MasterdataService,
    private snackBar: MatSnackBar,
    private router: Router,
    private auth: AuthService
  ) {
    this.course = {
      courseid: '0',
      categoryid: '',
      userid: '',
      title: '',
      excerpt: '',
      price: 0,
      saleprice: 0,
      duration: 0,
      lectures: 0,
      videos: 0,
      levelid: '',
      level: '',
      description: '',
      featuredimageurl: '',
      coursestatusid: '',
      coursestatus: '',
    };
  }

  ngOnInit(): void {
    this.api.getLevelIds().subscribe((res) => {
      this.levelData = res;
      //console.log(this.levelData);
    });

    this.api.getCategoryIds().subscribe((res) => {
      this.categoryData = res;
      //console.log(this.categoryData);
    });

    this.api.getCourseStatusIds().subscribe((res) => {
      this.coursestatusData = res;
      //console.log(this.coursestatusData);
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.formSubmitted = true;
    this.auth.displayTabs();
    const promise = new Promise((res, rej) => {
      res('success');
    });

    promise
      .then(() => {
        this.course.userid = this.masterDataService.userid;
        // console.log('this.course', this.course);
        // this.isLoading = false;
      })
      .then(() => {
        //console.log('this.course', this.course);
        this.api.addCourse(this.course).subscribe(
          (res) => {
            this.isLoading = false;
            this.masterDataService.fillMoreDetails = true;
            console.log(res);
            //console.log(Object.values(res)[1]['courseid']);
            //this.response = JSON.parse(JSON.stringify(res));
            this.response = res;
            this.masterDataService.courseid =
              this.response['coursedetail']['courseid'];
            this.masterDataService.title =
              this.response['coursedetail']['title'];
            //console.log(Object.entries(Object.entries(res)[1][1])[0][1]);
            //this.router.navigate(['add-course/syllabus']);
          },
          (err) => {
            this.isLoading = false;
            console.log(err.statusText);
            let config = new MatSnackBarConfig();
            config.duration = 3000;
            this.snackBar.open(err.statusText, err.status, config);
          }
        );
      });
  }
}
