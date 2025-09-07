import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalVisibilitySubject = new BehaviorSubject<boolean>(false);
  public modalVisibility$: Observable<boolean> = this.modalVisibilitySubject.asObservable();

  public printVisibility(): void {
    console.log(this.modalVisibilitySubject.value);
  }

  newGameModalItsOpen(): void {
    this.modalVisibilitySubject.next(true);
  }

  newGameModalItsClosed(): void {
    this.modalVisibilitySubject.next(false);
  }
}
