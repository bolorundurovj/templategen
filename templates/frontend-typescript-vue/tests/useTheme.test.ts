import { describe, it, expect, beforeEach } from 'vitest'
import { useTheme } from '../src/composables/useTheme'

describe('useTheme Composable', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.classList.remove('dark')
  })

  it('defaults to light theme', () => {
    const { theme } = useTheme()
    expect(theme.value).toBe('light')
  })

  it('toggles theme between light and dark', () => {
    const { theme, toggleTheme } = useTheme()
    toggleTheme()
    expect(theme.value).toBe('dark')

    toggleTheme()
    expect(theme.value).toBe('light')
  })
})
