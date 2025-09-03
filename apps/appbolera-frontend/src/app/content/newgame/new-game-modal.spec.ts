import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewGameModal } from './new-game-modal';

describe('NewGameModal', () => {
  let component: NewGameModal;
  let fixture: ComponentFixture<NewGameModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewGameModal],
    }).compileComponents();

    fixture = TestBed.createComponent(NewGameModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
