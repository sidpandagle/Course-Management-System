import { TopicComponent } from './components/add-course/syllabus/topic/topic.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/loading/loading.component';
import { DetailsComponent } from './components/add-course/details/details.component';
import { SyllabusComponent } from './components/add-course/syllabus/syllabus.component';
import { AnnouncementComponent } from './components/add-course/announcement/announcement.component';
import { FaqComponent } from './components/add-course/faq/faq.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VideoComponent } from './components/add-course/syllabus/topic/video/video.component';
import { TopicMaterialComponent } from './components/add-course/syllabus/topic/topic-material/topic-material.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CoursesComponent,
    AboutUsComponent,
    ContactUsComponent,
    AddCourseComponent,
    LoadingComponent,
    DetailsComponent,
    SyllabusComponent,
    AnnouncementComponent,
    FaqComponent,
    PageNotFoundComponent,
    TopicComponent,
    VideoComponent,
    TopicMaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    EditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
