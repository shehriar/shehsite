import {Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent {
  title = 'Education';
  selectedUniversity = '';
  @ViewChild('educationComponent', { static: false }) educationComponent!: ElementRef;

  constructor(private scrollService : ScrollService) {}

  ngOnInit() {
    this.scrollService.scrollToEducationObservable.subscribe(() => {
      this.educationComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  clickButton(university: string) {
    this.selectedUniversity = university;
  } 
}