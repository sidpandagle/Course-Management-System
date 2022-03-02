import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { SyllabusComponent } from './components/add-course/syllabus/syllabus.component';
import { FaqComponent } from './components/add-course/faq/faq.component';
import { AnnouncementComponent } from './components/add-course/announcement/announcement.component';
import { DetailsComponent } from './components/add-course/details/details.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  // {
  //   path: 'add-course',
  //   component: AddCourseComponent,
  //   canActivate: [AuthenticationGuard],
  // },
  {
    path: 'add-course',
    component: AddCourseComponent,
    //canActivate: [AuthenticationGuard],
    //canActivateChild: [AuthenticationGuard],
    children: [
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: 'syllabus',
        component: SyllabusComponent,
        //canActivate: [AuthenticationGuard]
      },
      {
        path: 'announcement',
        component: AnnouncementComponent,
        //canActivate: [AuthenticationGuard]
      },
      {
        path: 'faq',
        component: FaqComponent,
        //canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'pagenotfound', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pagenotfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard],
})
export class AppRoutingModule {}
