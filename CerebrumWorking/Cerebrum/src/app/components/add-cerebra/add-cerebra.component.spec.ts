import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCerebraComponent } from './add-cerebra.component';

describe('AddCerebraComponent', () => {
  let component: AddCerebraComponent;
  let fixture: ComponentFixture<AddCerebraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCerebraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCerebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
