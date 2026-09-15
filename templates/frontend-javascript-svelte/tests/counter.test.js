import { describe, it, expect, beforeEach } from 'vitest'
import { get } from 'svelte/store'
import { counter } from '../src/lib/stores/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    localStorage.clear()
    counter.reset()
  })

  it('starts at 0 by default', () => {
    expect(get(counter)).toBe(0)
  })

  it('increments and persists to localStorage', () => {
    counter.increment()
    expect(get(counter)).toBe(1)
    expect(localStorage.getItem('app-count')).toBe('1')

    counter.increment()
    expect(get(counter)).toBe(2)
    expect(localStorage.getItem('app-count')).toBe('2')
  })
})
