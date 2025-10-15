import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-scorer-modal',
  imports: [TableModule],
  templateUrl: './scorer-modal.html',
  styleUrl: './scorer-modal.css',
})
export class ScorerModal {

  private router = inject(Router)
  
}
