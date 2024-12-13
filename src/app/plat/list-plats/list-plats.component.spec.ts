import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlatsComponent } from './list-plats.component';

describe('ListPlatsComponent', () => {
  let component: ListPlatsComponent;
  let fixture: ComponentFixture<ListPlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPlatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
