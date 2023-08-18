import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDuckComponent } from './add-edit-duck.component';

describe('AddEditDuckComponent', () => {
  let component: AddEditDuckComponent;
  let fixture: ComponentFixture<AddEditDuckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditDuckComponent]
    });
    fixture = TestBed.createComponent(AddEditDuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
