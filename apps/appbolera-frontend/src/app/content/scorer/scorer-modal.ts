import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal/modal.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-scorer-modal',
  imports: [TableModule],
  templateUrl: './scorer-modal.html',
  styleUrl: './scorer-modal.css',
  standalone: true
})
export class ScorerModal implements OnInit{

  private gameDuration: number | null = null;
  private router = inject(Router);
  private modalService = inject(ModalService);

  ngOnInit(): void {
      this.modalService.duration$.subscribe(value => {
        this.gameDuration = value;
      })
      this.printGameDuration()
  }

  private printGameDuration(){
    console.log(this.gameDuration)
  }

}
