import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCatalogComponent } from './anime-catalog.component';

describe('AnimeCatalogComponent', () => {
  let component: AnimeCatalogComponent;
  let fixture: ComponentFixture<AnimeCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
