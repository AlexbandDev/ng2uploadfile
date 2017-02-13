/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicformComponent } from './basicform.component';

describe('BasicformComponent', () => {
  let component: BasicformComponent;
  let fixture: ComponentFixture<BasicformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
