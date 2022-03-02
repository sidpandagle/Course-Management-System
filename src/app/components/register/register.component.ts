import { MasterdataService } from '../../services/masterdata.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { RegisterUserModel } from 'src/app/models/user';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { getCountriesForTimezone } from 'countries-and-timezones';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  formSubmitted = false;

  user!: RegisterUserModel;

  timezones!: any;
  countrycodes!: any;

  constructor(
    private api: ApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.user = {
      username: '',
      email: '',
      password: '',
      countrycode: getCountriesForTimezone(
        Intl.DateTimeFormat().resolvedOptions().timeZone
      )[0].id,
      isinstructor: false,
    };
  }

  ngOnInit(): void {}
  onSubmit() {
    this.isLoading = true;
    this.formSubmitted = true;
    //this.user = JSON.parse(JSON.stringify(val));
    this.api.registerUser(this.user).subscribe(
      (res) => {
        this.isLoading = false;
        console.log(res);
        this.router.navigate(['login']);
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
