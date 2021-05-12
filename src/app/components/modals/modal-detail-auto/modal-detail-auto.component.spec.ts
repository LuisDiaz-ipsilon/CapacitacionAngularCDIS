import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailAutoComponent } from './modal-detail-auto.component';

describe('ModalDetailAutoComponent', () => {
  let component: ModalDetailAutoComponent;
  let fixture: ComponentFixture<ModalDetailAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
