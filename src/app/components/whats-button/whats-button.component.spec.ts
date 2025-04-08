import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsButtonComponent } from './whats-button.component';

describe('WhatsButtonComponent', () => {
  let component: WhatsButtonComponent;
  let fixture: ComponentFixture<WhatsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
