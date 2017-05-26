import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerebraComponent } from './cerebra.component';

describe('CerebraComponent', () => {
  let component: CerebraComponent;
  let fixture: ComponentFixture<CerebraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerebraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
