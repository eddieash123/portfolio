import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSellComponent } from './tech-sell.component';

describe('TechSellComponent', () => {
  let component: TechSellComponent;
  let fixture: ComponentFixture<TechSellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechSellComponent]
    });
    fixture = TestBed.createComponent(TechSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
