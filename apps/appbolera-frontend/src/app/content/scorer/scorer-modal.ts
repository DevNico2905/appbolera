/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal/modal.service';
import { PlayerService } from '../../services/player/player.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
interface Player {
  id?: number;
  name: string;
  gameId: string;
}

@Component({
  selector: 'app-scorer-modal',
  imports: [TableModule, CommonModule],
  templateUrl: './scorer-modal.html',
  styleUrl: './scorer-modal.css',
  standalone: true
})
export class ScorerModal implements OnInit{

  private router = inject(Router);
  private modalService = inject(ModalService);
  private playerService = inject(PlayerService);
  private gameDuration: number | null = null;
  timeLeft: number = 0; // En segundos
  private timerInterval: ReturnType<typeof setInterval> | null = null;
  formattedTime: string = '';
  players: Player[] = [];

  ngOnInit(): void {
      this.modalService.duration$.subscribe(value => {
        this.gameDuration = value;
      })
      this.printGameDuration()
      this.startTimer()
      this.loadPlayers()
  }

  loadPlayers(): void {
  this.playerService.getPlayersByGameId(this.modalService.getCurrentGameId())
    .subscribe({
      next: (players) => {
        this.players = players.map(p => this.initializePlayer(p));
      },
      error: (error) => {
        console.error('Error al cargar jugadores:', error);
      }
    });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
private initializePlayer(player: any) {
  return {
    ...player,
    frames: this.createEmptyFrames(10),
    totalScore: 0
  };
}

private createEmptyFrames(count: number) {
  return Array.from({ length: count }, () => ({
    attempt1: null,
    attempt2: null,
    total: null
  }));
}

  private printGameDuration(){
    console.log(this.gameDuration)
  }

  startTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    if (!this.gameDuration) return;

    this.timeLeft = this.gameDuration * 60; // minutos a segundos
    this.updateFormattedTime();

    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.updateFormattedTime();
      } else {
        if (this.timerInterval !== null) {
          clearInterval(this.timerInterval);
        }
      }
    }, 1000);
  }

  updateFormattedTime() {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    this.formattedTime = `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  OnDestroy() {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
    }
  }
}
