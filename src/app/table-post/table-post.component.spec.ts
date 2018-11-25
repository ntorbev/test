import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePostComponent } from './table-post.component';

describe('TablePostComponent', () => {
  let component: TablePostComponent;
  let fixture: ComponentFixture<TablePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
