import { Component } from '@angular/core';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shehsite';

  constructor(private scrollService : ScrollService){}

  onEducationClick() {
    this.scrollService.scrollToEducation();
  }

  onHomeClick(){
    this.scrollService.scrollToHome();
  }
}
