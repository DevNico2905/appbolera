/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal/modal.service';
import { PlayerService } from '../../services/player/player.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

interface Frame {
  attempt1: number | null;
  attempt2: number | null;
  attempt3?: number | null; // For 10th frame
  total: number | null;
}

interface Player {
  id?: number;
  name: string;
  gameId: string;
  frames?: Frame[];
  totalScore?: number;
}

@Component({
  selector: 'app-scorer-modal',
  imports: [TableModule, CommonModule],
  templateUrl: './scorer-modal.html',
  styleUrl: './scorer-modal.css',
  standalone: true
})
export class ScorerModal implements OnInit, OnDestroy {
  private router = inject(Router);
  private modalService = inject(ModalService);
  private playerService = inject(PlayerService);
  
  private gameDuration: number | null = null;
  private timerInterval: ReturnType<typeof setInterval> | null = null;
  private subscriptions = new Subscription();
  
  timeLeft: number = 0;
  formattedTime: string = '';
  players: Player[] = [];

  ngOnInit(): void {
    // Store subscription for cleanup
    this.subscriptions.add(
      this.modalService.duration$.subscribe(value => {
        this.gameDuration = value;
        this.printGameDuration();
        this.startTimer();
      })
    );
    
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.subscriptions.add(
      this.playerService.getPlayersByGameId(this.modalService.getCurrentGameId())
        .subscribe({
          next: (players) => {
            this.players = players.map(p => this.initializePlayer(p));
          },
          error: (error) => {
            console.error('Error al cargar jugadores:', error);
          }
        })
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private initializePlayer(player: any): Player {
    return {
      ...player,
      frames: this.createEmptyFrames(10),
      totalScore: 0
    };
  }

  private createEmptyFrames(count: number): Frame[] {
    return Array.from({ length: count }, (_, index) => ({
      attempt1: null,
      attempt2: null,
      ...(index === 9 ? { attempt3: null } : {}), // 10th frame gets 3rd attempt
      total: null
    }));
  }

  private printGameDuration(): void {
    console.log('Game Duration (minutes):', this.gameDuration);
  }

  startTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    if (!this.gameDuration) return;

    this.timeLeft = this.gameDuration * 60;
    this.updateFormattedTime();

    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.updateFormattedTime();
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  private stopTimer(): void {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  private updateFormattedTime(): void {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    this.formattedTime = `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  ngOnDestroy(): void {
    this.stopTimer();
    this.subscriptions.unsubscribe();
  }
}