import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreedDetailsPage } from './breed-details.page';

describe('BreedDetailsPage', () => {
  let component: BreedDetailsPage;
  let fixture: ComponentFixture<BreedDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BreedDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
