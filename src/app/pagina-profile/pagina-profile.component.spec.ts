import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProfileComponent } from './pagina-profile.component';

describe('PaginaProfileComponent', () => {
  let component: PaginaProfileComponent;
  let fixture: ComponentFixture<PaginaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
