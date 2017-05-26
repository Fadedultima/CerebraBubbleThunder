import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerebrasComponent } from './cerebras.component';

describe('CerebrasComponent', () => {
  let component: CerebrasComponent;
  let fixture: ComponentFixture<CerebrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerebrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerebrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
