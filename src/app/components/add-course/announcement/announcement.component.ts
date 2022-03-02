import { MasterdataService } from 'src/app/services/masterdata.service';
import { Announcement } from './../../../models/course';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { decode, encode } from 'html-entities';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
})
export class AnnouncementComponent implements OnInit {
  isLoading = false;
  formSubmitted = false;
  courseId: string = this.masterData.courseid;
  title: string = this.masterData.title;
  msg!: Announcement;
  displayText: any;
  announcementArray: any[] = [];
  response: any;
  constructor(
    private api: ApiService,
    private masterData: MasterdataService,
    private snackBar: MatSnackBar
  ) {
    this.msg = {
      courseid: this.courseId,
      //courseid: 'YUVNT0x1RWRUZ3RZNXBsMHdCR1Y3Zz09',
      title: this.title,
      announcement: '',
    };
  }

  ngOnInit(): void {}

  onSubmit(val: any) {
    this.isLoading = true;
    this.msg.announcement = encode(val.announcement);
    this.displayText = decode(this.msg.announcement);
    //this.announcementArray.push(this.displayText);
    this.api.addAnnouncement(this.msg).subscribe(
      (res) => {
        this.isLoading = false;
        this.response = JSON.parse(JSON.stringify(res));
        this.announcementArray.push(decode(this.response[0].announcement));
        let config = new MatSnackBarConfig();
        config.duration = 3000;
        this.snackBar.open(
          'Created Announcement Successfully.',
          'Done',
          config
        );
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
}
