import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  LandingComponent, CreateExamComponent, CreateOrgComponent, ExamsGalleryComponent, 
  SigninComponent 
} from './components/pages';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent },
  { path: 'create-exam', component: CreateExamComponent },
  { path: 'create-org', component: CreateOrgComponent },
  { path: 'exams-gallery', component: ExamsGalleryComponent },
  { path: 'sign-in', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
