import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFafmilyMembersComponent } from './show-fafmily-members.component';

describe('ShowFafmilyMembersComponent', () => {
  let component: ShowFafmilyMembersComponent;
  let fixture: ComponentFixture<ShowFafmilyMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFafmilyMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFafmilyMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
