import { describe, it, expect, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { useLocalStorage } from '../src/composables/useLocalStorage'

describe('useLocalStorage Composable', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('reads initial value when nothing is in localStorage', () => {
    const state = useLocalStorage('test-key', 10)
    expect(state.value).toBe(10)
  })

  it('syncs updates to localStorage', async () => {
    const state = useLocalStorage('test-key', 'hello')
    state.value = 'world'
    await nextTick()
    expect(JSON.parse(localStorage.getItem('test-key') || '')).toBe('world')
  })
})
