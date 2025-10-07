import { inject, Injectable } from '@angular/core';
import { environment} from '../../environment/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Player{
  id?: number;
  name: string;
  gameId: string;
}

@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  private http = inject(HttpClient);
  

  // Endpoint guardar jugadores.
  savePlayers(players: Player[]): Observable<Player[]> {
    return this.http.post<Player[]>(`${environment.backendHost}/savePlayers`, players);
  }

  // Guardar el Id del juego
  saveGameId(gameId: string): Observable<string> {
    return this.http.post<string>(`${environment.backendHost}/saveGameId/${gameId}`, {});
  }
}
