import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @HostListener('window:beforeunload')
  // private someFunction() {
  //   let confirmObject = confirm('You want to leave ?');
  //   if (confirmObject == true) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  title = 'WebApp';
}
