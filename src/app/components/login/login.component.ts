import { NotificationService } from './../../services/notification.service';
import { MasterdataService } from './../../services/masterdata.service';
import { AuthService } from './../../services/auth.service';
import { LoginUserModel } from './../../models/user';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  formSubmitted = false;
  user!: LoginUserModel;
  userid!: string;
  constructor(
    private api: ApiService,
    private router: Router,
    private auth: AuthService,
    private masterDataService: MasterdataService,
    private snackBar: MatSnackBar
  ) {
    this.user = {
      email: '',
      password: '',
    };
  }

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    this.formSubmitted = true;
    //setTimeout(() => (this.isLoading = false), 1000);
    this.api.LoginUser(this.user).subscribe(
      (res) => {
        console.log(this.user);
        if (JSON.parse(JSON.stringify(res)).message === 'success') {
          this.isLoading = false;
          this.userid = JSON.parse(JSON.stringify(res)).userid;
          if (JSON.parse(JSON.stringify(res)).role === 'instructor') {
            this.masterDataService.userid = JSON.parse(
              JSON.stringify(res)
            ).userid;
            //this.auth.displayAddCourse();
            this.auth.displayAddCourse();
            this.router.navigate(['/add-course/details']);
          } else {
            this.isLoading = false;
            this.router.navigate(['/home']);
          }
          //this.router.navigate(['/home']);
        }
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
