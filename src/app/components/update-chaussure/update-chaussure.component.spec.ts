import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChaussureComponent } from './update-chaussure.component';

describe('UpdateChaussureComponent', () => {
  let component: UpdateChaussureComponent;
  let fixture: ComponentFixture<UpdateChaussureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateChaussureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChaussureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
