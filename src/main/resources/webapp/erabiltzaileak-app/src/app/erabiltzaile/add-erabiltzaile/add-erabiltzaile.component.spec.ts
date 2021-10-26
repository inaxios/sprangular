import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddErabiltzaileComponent } from './add-erabiltzaile.component';

describe('AddErabiltzaileComponent', () => {
  let component: AddErabiltzaileComponent;
  let fixture: ComponentFixture<AddErabiltzaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddErabiltzaileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddErabiltzaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
