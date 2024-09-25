import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToContactSubject = new Subject<void>();

  // Observable pour le défilement
  scrollToContact$ = this.scrollToContactSubject.asObservable();

  // Méthode pour déclencher le défilement
  triggerScrollToContact() {
    this.scrollToContactSubject.next();
  }
}
