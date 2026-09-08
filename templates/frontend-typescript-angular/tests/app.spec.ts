import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from '../src/app/app';

describe('Angular App Component', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the application instance', () => {
    expect(component).toBeTruthy();
  });

  it('renders starter title and branding', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.badge')?.textContent).toContain('TemplateGen Starter');
    expect(compiled.querySelector('.card-title')?.textContent).toContain('Interactive Counter');
  });

  it('initializes count at 0 and increments upon button click', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button') as HTMLButtonElement;
    expect(button.textContent).toContain('Count is 0');

    button.click();
    fixture.detectChanges();
    expect(button.textContent).toContain('Count is 1');

    button.click();
    fixture.detectChanges();
    expect(button.textContent).toContain('Count is 2');
  });
});
