import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBlockComponent } from './catalog-block.component';

describe('CatalogBlockComponent', () => {
  let component: CatalogBlockComponent;
  let fixture: ComponentFixture<CatalogBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
