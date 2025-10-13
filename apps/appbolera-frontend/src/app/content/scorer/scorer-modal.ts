import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scorer-modal',
  imports: [],
  templateUrl: './scorer-modal.html',
  styleUrl: './scorer-modal.css',
})
export class ScorerModal {

  private router = inject(Router)
  
}
