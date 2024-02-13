import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToCarSearchSource = new Subject<void>();
  scrollToCarSearchObservable = this.scrollToCarSearchSource.asObservable();

  scrollToSearchCar() {
    this.scrollToCarSearchSource.next();
  }
}