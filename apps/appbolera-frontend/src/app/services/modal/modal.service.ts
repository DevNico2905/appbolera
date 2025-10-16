import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalVisibilitySubject = new BehaviorSubject<boolean>(false);
  public modalVisibility$: Observable<boolean> = this.modalVisibilitySubject.asObservable();

  private playersSubject = new BehaviorSubject<{
    names: string[], 
    count: number
  }>({ names: [], count: 0 });

  private currentGameId: string | null = null;
  private gameDuration = new BehaviorSubject<number>(0);
  duration$ = this.gameDuration.asObservable();

  public printVisibility(): void {
    console.log(this.modalVisibilitySubject.value);
  }

  newGameModalItsOpen(): void {
    this.modalVisibilitySubject.next(true);
  }

  newGameModalItsClosed(): void {
    this.modalVisibilitySubject.next(false);
  }

  closeNewGameModal(): void {
    this.modalVisibilitySubject.next(false);
  }

  setCurrentGameId(gameId: string) {
    this.currentGameId = gameId;
  }

  // Métodos para manejar los jugadores
  setPlayers(names: string[], count: number): void {
    this.playersSubject.next({ names, count });
  }

  setGameDuration(timeValue: number){
    this.gameDuration.next(timeValue);
  }

}
