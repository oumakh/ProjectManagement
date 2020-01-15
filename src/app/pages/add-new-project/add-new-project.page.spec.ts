import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNewProjectPage } from './add-new-project.page';

describe('AddNewProjectPage', () => {
  let component: AddNewProjectPage;
  let fixture: ComponentFixture<AddNewProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewProjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
