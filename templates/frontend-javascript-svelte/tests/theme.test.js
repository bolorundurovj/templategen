import { describe, it, expect, beforeEach } from 'vitest'
import { get } from 'svelte/store'
import { theme } from '../src/lib/stores/theme'

describe('Theme Store', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.classList.remove('dark')
    theme.set('light')
  })

  it('starts at light theme', () => {
    expect(get(theme)).toBe('light')
  })

  it('toggles theme and updates document attributes', () => {
    theme.toggle()
    expect(get(theme)).toBe('dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')

    theme.toggle()
    expect(get(theme)).toBe('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })
})
