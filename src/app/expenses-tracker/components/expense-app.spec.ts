import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseApp } from './expense-app/expense-app';

describe('ExpenseApp', () => {
  let component: ExpenseApp;
  let fixture: ComponentFixture<ExpenseApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
