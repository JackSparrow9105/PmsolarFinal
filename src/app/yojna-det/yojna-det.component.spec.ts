import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YojnaDetComponent } from './yojna-det.component';

describe('YojnaDetComponent', () => {
  let component: YojnaDetComponent;
  let fixture: ComponentFixture<YojnaDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YojnaDetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YojnaDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
