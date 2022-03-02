import { Router } from '@angular/router';
import { MasterdataService } from './../../services/masterdata.service';
import { ApiService } from './../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/models/course';
import { ConditionalExpr } from '@angular/compiler';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  constructor(public masterDataService: MasterdataService) {}

  ngOnInit(): void {}
}
