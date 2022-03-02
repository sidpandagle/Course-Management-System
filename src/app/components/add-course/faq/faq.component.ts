import { MasterdataService } from 'src/app/services/masterdata.service';
import { ApiService } from 'src/app/services/api.service';
import { FaqRoot } from './../../../models/course';
import { NavigationEnd, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { getCountriesForTimezone } from 'countries-and-timezones';
import { Subscription } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  isLoading = false;
  faqAdded = false;
  formSubmitted = false;
  faqNewArray!: FaqRoot;
  courseid!: string;

  constructor(
    private router: Router,
    private api: ApiService,
    private masterData: MasterdataService,
    private snackbar: MatSnackBar
  ) {
    this.courseid = this.masterData.courseid;
    this.faqNewArray = {
      courseid: this.courseid,
      faqs: [],
    };
  }

  ngOnInit(): void {}

  addFaq(val: any) {
    val.value.faqid = '';
    this.faqAdded = true;
    this.faqNewArray.faqs.push(val.value);
    val.reset();
  }

  deleteCompletely(val: number) {
    this.isLoading = true;
    this.api.deleteFaq(this.faqNewArray.faqs[val].faqid).subscribe(
      (res) => {
        console.log(res);
        this.faqNewArray.faqs.splice(val, 1);
        this.isLoading = false;
        let config = new MatSnackBarConfig();
        config.duration = 3000;
        this.snackbar.open('Faq Delete Successfully', 'Done', config);
      },
      (err) => {
        this.isLoading = false;
        let config = new MatSnackBarConfig();
        config.duration = 3000;
        this.snackbar.open('Error Deleting Faq', 'Done', config);
      }
    );
  }

  deletePartially(val: number) {
    this.faqNewArray.faqs.splice(val, 1);
    let config = new MatSnackBarConfig();
    config.duration = 3000;
    this.snackbar.open('Faq Delete Successfully', 'Done', config);
  }

  onSubmit() {
    this.isLoading = true;
    this.formSubmitted = true;
    this.api.addFaq(this.faqNewArray).subscribe(
      (res) => {
        console.log(res.message);
        this.faqNewArray = res;
        this.isLoading = false;
        let config = new MatSnackBarConfig();
        config.duration = 3000;
        this.snackbar.open(`${res.message}`, 'Done', config);
      },
      (err) => {
        this.isLoading = false;
        console.log(err.statusText);
        let config = new MatSnackBarConfig();
        config.duration = 3000;
        this.snackbar.open(err.statusText, err.status, config);
      }
    );
  }

  confirm() {
    if (!this.formSubmitted) {
      return confirm('Change made, may not be saved. Leave?');
    }
    return true;
  }
}
