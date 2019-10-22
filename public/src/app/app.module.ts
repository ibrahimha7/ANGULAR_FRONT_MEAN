import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';
import { RecruiterComponent } from './components/recruiter/recruiter.component';
import { AdminComponent } from './components/admin/admin.component';
import { JobComponent } from './components/job/job.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';
import { SearchComponent } from './components/job/search/search.component';
import { ListOfJobSeekerComponent } from './components/job-seeker/list-of-job-seeker/list-of-job-seeker.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { IndieComponent } from './components/job-seeker/indie/indie.component';
import { StutusLineComponent } from './components/job/stutus-line/stutus-line.component';

@NgModule({
  declarations: [
    AppComponent,
    JobSeekerComponent,
    RecruiterComponent,
    AdminComponent,
    JobComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    ListOfJobSeekerComponent,
    NavbarComponent,
    IndieComponent,
    StutusLineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
