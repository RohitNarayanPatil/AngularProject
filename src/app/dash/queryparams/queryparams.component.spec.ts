import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparamsComponent } from './queryparams.component';

describe('QueryparamsComponent', () => {
  let component: QueryparamsComponent;
  let fixture: ComponentFixture<QueryparamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryparamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
