import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicMaterialComponent } from './topic-material.component';

describe('TopicMaterialComponent', () => {
  let component: TopicMaterialComponent;
  let fixture: ComponentFixture<TopicMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
