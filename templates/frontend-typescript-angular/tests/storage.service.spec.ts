import { TestBed } from '@angular/core/testing';
import { StorageService } from '../src/app/services/storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('retrieves default value when key does not exist', () => {
    expect(service.getItem('nonexistent', 123)).toBe(123);
  });

  it('stores and retrieves values correctly', () => {
    service.setItem('test-key', { name: 'Angular' });
    expect(service.getItem('test-key', {})).toEqual({ name: 'Angular' });
  });

  it('removes item from storage', () => {
    service.setItem('to-remove', 'value');
    service.removeItem('to-remove');
    expect(service.getItem('to-remove', 'fallback')).toBe('fallback');
  });
});
