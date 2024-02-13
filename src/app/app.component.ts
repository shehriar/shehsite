import { Component } from '@angular/core';
import { ScrollService } from './services/scroll.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shehsite';
  @ViewChild('appComponent', { static: false }) appComponent!: ElementRef;

  constructor(private scrollService : ScrollService){}

  ngOnInit() {
    this.scrollService.scrollToHomeObservable.subscribe(() => {
      this.appComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  onEducationClick() {
    this.scrollService.scrollToEducation();
  }

  onHomeClick(){
    this.scrollService.scrollToHome();
  }

  onProjectsClick(){
    this.scrollService.scrollToProjects();
  }
}
