import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewTaskPage } from './add-new-task.page';

describe('AddNewTaskPage', () => {
  let component: AddNewTaskPage;
  let fixture: ComponentFixture<AddNewTaskPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddNewTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

