import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCerebraComponent } from './edit-cerebra.component';

describe('EditCerebraComponent', () => {
  let component: EditCerebraComponent;
  let fixture: ComponentFixture<EditCerebraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCerebraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCerebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
