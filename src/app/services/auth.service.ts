import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  statusAddCourse = false;
  statusTabs = false;

  constructor() {}

  displayAddCourse() {
    this.statusAddCourse = true;
    return this.statusAddCourse;
  }

  displayTabs() {
    this.statusTabs = true;
    return this.statusTabs;
  }
}
