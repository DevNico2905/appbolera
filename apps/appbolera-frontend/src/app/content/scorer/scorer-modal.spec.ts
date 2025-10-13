import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScorerModal } from './scorer-modal';

describe('ScorerModal', () => {
  let component: ScorerModal;
  let fixture: ComponentFixture<ScorerModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScorerModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ScorerModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
