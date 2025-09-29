import { Inject, Injectable } from '@angular/core';
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

  // "/saveGameId/{gameId}"
  // "/savePlayers"

  private http = Inject(HttpClient);

  // Endpoint guardar jugadores.
  savePlayers(players: Player[]): Observable<Player[]> {
    return this.http.post<Player[]>(`${environment.backendHost}/savePlayers`, players);
  }

}
