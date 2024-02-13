import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToEducationSource = new Subject<void>();
  scrollToEducationObservable = this.scrollToEducationSource.asObservable();

  scrollToEducation() {
    this.scrollToEducationSource.next();
  }

  private scrollToHomeSource = new Subject<void>();
  scrollToHomeObservable = this.scrollToHomeSource.asObservable();

  scrollToHome() {
    this.scrollToHomeSource.next();
  }

  private scrollToProjectsSource = new Subject<void>();
  scrollToProjectsObservable = this.scrollToProjectsSource.asObservable();

  scrollToProjects() {
    this.scrollToProjectsSource.next();
  }
}