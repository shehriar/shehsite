import {Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent {
  title = 'Education';
  selectedUniversity = '';

  constructor() {}
  clickButton(university: string) {
    this.selectedUniversity = university;
  } 
}