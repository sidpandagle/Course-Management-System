import { Topic } from 'src/app/models/course';
import { FaqRoot, Announcement, Section } from './../models/course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserModel } from '../models/user';
import { CourseModel } from '../models/course';
import { LoginUserModel } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = 'http://192.168.0.113:81/api';
  constructor(private http: HttpClient) {}

  registerUser(user: RegisterUserModel) {
    return this.http.post<RegisterUserModel>(
      `${this.BASE_URL}/Account/registeruser`,
      user
    );
  }

  LoginUser(user: LoginUserModel) {
    return this.http.post<LoginUserModel>(
      `${this.BASE_URL}/Account/authenticateuser`,
      user
    );
  }

  getLevelIds() {
    return this.http.get(`${this.BASE_URL}/Master/courselevels`);
  }

  getCourseStatusIds() {
    return this.http.get(`${this.BASE_URL}/Master/coursestatus`);
  }

  getCategoryIds() {
    return this.http.get(`${this.BASE_URL}/Master/category`);
  }

  addCourse(course: CourseModel) {
    return this.http.post<CourseModel>(
      `${this.BASE_URL}/Course/create`,
      course
    );
  }

  addFaq(faq: FaqRoot) {
    return this.http.post<FaqRoot>(`${this.BASE_URL}/Course/faqs`, faq);
  }

  deleteFaq(faqid: any) {
    return this.http.delete(`${this.BASE_URL}/Course/deletefaq/${faqid}`);
  }

  addAnnouncement(msg: Announcement) {
    return this.http.post<Announcement>(
      `${this.BASE_URL}/Course/announcement`,
      msg
    );
  }

  addSection(section: Section) {
    return this.http.post<Section>(`${this.BASE_URL}/course/section`, section);
  }

  addTopicMedia(media: any) {
    return this.http.post(`${this.BASE_URL}/upload/topicmedia`, media);
  }

  addTopic(topic: Topic) {
    return this.http.post<Topic>(
      `${this.BASE_URL}/course/section/topic`,
      topic
    );
  }
}
