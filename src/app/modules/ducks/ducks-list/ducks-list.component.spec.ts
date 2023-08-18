import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DucksListComponent } from './ducks-list.component';

describe('DucksListComponent', () => {
  let component: DucksListComponent;
  let fixture: ComponentFixture<DucksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DucksListComponent]
    });
    fixture = TestBed.createComponent(DucksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
