import { TestBed } from '@angular/core/testing';
import { ThemeService } from '../src/app/services/theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('initializes with light theme by default', () => {
    expect(service.theme()).toBe('light');
  });

  it('toggles theme between light and dark', () => {
    service.toggleTheme();
    expect(service.theme()).toBe('dark');

    service.toggleTheme();
    expect(service.theme()).toBe('light');
  });
});
