import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('homeComponent', { static: false }) homeComponent!: ElementRef;

  constructor(private scrollService : ScrollService) {}

  ngOnInit() {
    this.scrollService.scrollToHomeObservable.subscribe(() => {
      this.homeComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

}
