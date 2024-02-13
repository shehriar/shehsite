import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @ViewChild('projectsComponent', { static: false }) projectsComponent!: ElementRef;

  constructor(private scrollService : ScrollService) {}

  ngOnInit() {
    this.scrollService.scrollToProjectsObservable.subscribe(() => {
      this.projectsComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}
