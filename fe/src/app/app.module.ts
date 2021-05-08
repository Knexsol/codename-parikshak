import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { CreateExamStepsComponent } from './components/pages/create-exam/create-exam-steps/create-exam-steps.component';

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
    CreateExamStepsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule ,
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
