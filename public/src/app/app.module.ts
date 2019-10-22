import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';
import { RecruiterComponent } from './components/recruiter/recruiter.component';
import { AdminComponent } from './components/admin/admin.component';
import { JobComponent } from './components/job/job.component';
import { MainComponent } from './components/main/main.component';
//import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';
import { SearchComponent } from './components/job/search/search.component';
import { ListOfJobSeekerComponent } from './components/job-seeker/list-of-job-seeker/list-of-job-seeker.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { IndieComponent } from './components/job-seeker/indie/indie.component';
import { StutusLineComponent } from './components/job/stutus-line/stutus-line.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { LoginpageComponent } from './components/main/loginpage/loginpage.component';
import { RegisterAsUserComponent } from './components/main/register/register-as-user/register-as-user.component';
import { RegisterAsRecruiterComponent } from './components/main/register/register-as-recruiter/register-as-recruiter.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginAsRecComponent } from './components/main/loginpage/login-as-rec/login-as-rec.component';
import { LoginAsJobSeekerComponent } from './components/main/loginpage/login-as-job-seeker/login-as-job-seeker.component';

@NgModule({
  declarations: [
    AppComponent,
    JobSeekerComponent,
    RecruiterComponent,
    AdminComponent,
    JobComponent,
    MainComponent,
    RegisterComponent,
    SearchComponent,
    ListOfJobSeekerComponent,
    NavbarComponent,
    IndieComponent,
    StutusLineComponent,
    FooterComponent,
    LoginpageComponent,
    RegisterAsUserComponent,
    RegisterAsRecruiterComponent,
    LoginAsRecComponent,
    LoginAsJobSeekerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
