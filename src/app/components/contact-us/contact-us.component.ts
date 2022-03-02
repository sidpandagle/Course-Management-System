import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
