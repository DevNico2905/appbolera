import { Component, ElementRef, ViewChildren, QueryList , OnInit, AfterViewInit, inject} from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-new-game-modal',
  imports: [],
  templateUrl: './new-game-modal.html',
  styleUrl: './new-game-modal.css',
})
export class NewGameModal implements OnInit, AfterViewInit {
  @ViewChildren('radioButton') radioButtons!: QueryList<ElementRef>;
  
  selectedValue: string | null = null;
  errorMessage = '';
  successMessage = '';
  isSaving = false;
  showModal = false;

  private elRef = inject(ElementRef);
  private router = inject (Router)
  private modalService = inject(ModalService);

  ngOnInit(): void {
    this.modalService.newGameModalItsOpen();
    this.modalService.modalVisibility$.subscribe(visible => {
      this.showModal = visible;
      if (!visible) {
        this.resetForm();
      }
    })
    this.modalService.printVisibility();
  }

  ngAfterViewInit(): void {
    this.radioButtons.forEach(button => {
      button.nativeElement.addEventListener('click', () => this.onRadioButtonClick(button.nativeElement));
    });
    this.modalService.printVisibility();
  }

  onRadioButtonClick(button: HTMLElement): void {
    this.radioButtons.forEach(btn => btn.nativeElement.classList.remove('selected'));
    button.classList.add('selected');
    this.selectedValue = button.dataset['value'] || null;
    this.errorMessage = '';

    switch (this.selectedValue) {
      case '1-p': this.showDivNameDefault(); break;
      case '2-p': this.showDivNameTwo(); break;
      case '3-p': this.showDivNameThree(); break;
      case '4-p': this.showDivNameFour(); break;
      case '5-p': this.showDivNameFive(); break;
      case '6-p': this.showDivNameSix(); break;
    }
  }

  private getPlayerNames(): string[] {
    const names = [];
    const count = this.selectedValue ? parseInt(this.selectedValue.split('-')[0]) : 0;
    
    for (let i = 1; i <= count; i++) {
      const input = this.elRef.nativeElement.querySelector(`#i-n-${this.getNumberName(i)}`) as HTMLInputElement;
      if (input) names.push(input.value.trim());
    }
    
    return names;
  }

  private getNumberName(num: number): string {
    const names = ['one', 'two', 'three', 'four', 'five', 'six'];
    return names[num - 1] || '';
  }

  private clearInputs(): void {
    const inputs = this.elRef.nativeElement.querySelectorAll('.input-names') as NodeListOf<HTMLInputElement>;
    inputs.forEach(input => input.value = '');
  }

  private resetSelection(): void {
    this.radioButtons?.forEach(button => {
      button.nativeElement.classList.remove('selected');
    });
  }

  private showDivNameDefault(): void {
    this.toggleDivNameClasses({ two: false, three: false, four: false, five: false, six: false });
  }

  private showDivNameTwo(): void {
    this.toggleDivNameClasses({ two: true, three: false, four: false, five: false, six: false });
  }

  private showDivNameThree(): void {
    this.toggleDivNameClasses({ two: true, three: true, four: false, five: false, six: false });
  }

  private showDivNameFour(): void {
    this.toggleDivNameClasses({ two: true, three: true, four: true, five: false, six: false });
  }

  private showDivNameFive(): void {
    this.toggleDivNameClasses({ two: true, three: true, four: true, five: true, six: false });
  }

  private showDivNameSix(): void {
    this.toggleDivNameClasses({ two: true, three: true, four: true, five: true, six: true });
  }

  private toggleDivNameClasses(states: { two: boolean; three: boolean; four: boolean; five: boolean; six: boolean }): void {
    const mapping: Record<string, boolean> = {
      '#div-name-two': states.two,
      '#div-name-three': states.three,
      '#div-name-four': states.four,
      '#div-name-five': states.five,
      '#div-name-six': states.six,
    };

    Object.entries(mapping).forEach(([selector, shouldShow]) => {
      const div = this.elRef.nativeElement.querySelector(selector) as HTMLElement | null;
      if (div) {
        div.classList.toggle('showDivName', shouldShow);
      }
    });
  }

  private resetForm(): void {
    this.selectedValue = null;
    this.errorMessage = '';
    this.successMessage = '';
    this.isSaving = false;
    this.clearInputs();
    this.resetSelection();
    this.showDivNameDefault();
  }

  hideNewGameModal(): void {
    this.resetForm();
    this.modalService.newGameModalItsClosed();
    this.router.navigate([''])
  }

}
