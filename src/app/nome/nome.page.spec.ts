import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NomePage } from './nome.page';

describe('NomePage', () => {
  let component: NomePage;
  let fixture: ComponentFixture<NomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
