import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import { MainComponent } from './components/main/main.component';
import { LoginpageComponent } from './components/main/loginpage/loginpage.component';

import { SearchComponent } from './components/job/search/search.component';
import { ListOfJobSeekerComponent } from './components/job-seeker/list-of-job-seeker/list-of-job-seeker.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'login',component:LoginpageComponent},
  {path:'findjob',component:SearchComponent},
  {path:'jobseeker',component:ListOfJobSeekerComponent},

];

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
