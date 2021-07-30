import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { HeaderComponent, FooterComponent } from './components/layout';
import { LandingComponent, CreateExamComponent, CreateOrgComponent, ExamsGalleryComponent } from './components/pages';
import { QABlockComponent } from './components/pages/create-exam/qa-block/qa-block.component';
import { CreateExamIntroSectionComponent } from './components/pages/create-exam/create-exam-intro-section/create-exam-intro-section.component';
import { CreateExamBodySectionComponent } from './components/pages/create-exam/create-exam-body-section/create-exam-body-section.component';
import { CreateExamFinishSectionComponent } from './components/pages/create-exam/create-exam-finish-section/create-exam-finish-section.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    CreateExamComponent,
    CreateOrgComponent,
    ExamsGalleryComponent,
    QABlockComponent,
    CreateExamIntroSectionComponent,
    CreateExamBodySectionComponent,
    CreateExamFinishSectionComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
