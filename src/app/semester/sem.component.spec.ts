/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SemComponent } from './sem.component';

describe('SemComponent', () => {
  let component: SemComponent;
  let fixture: ComponentFixture<SemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
