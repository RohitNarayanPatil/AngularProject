import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlocationComponent } from './glocation.component';

describe('GlocationComponent', () => {
  let component: GlocationComponent;
  let fixture: ComponentFixture<GlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
