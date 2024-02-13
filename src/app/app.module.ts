import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { EducationComponent } from './education/education/education.component';
import { ProjectsComponent } from './projects/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
