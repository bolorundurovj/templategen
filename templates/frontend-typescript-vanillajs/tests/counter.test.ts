import { describe, it, expect } from 'vitest'
import { setupCounter } from '../src/counter'

describe('Vanilla TS Counter Module', () => {
  it('initializes the element text with Count is 0', () => {
    const button = document.createElement('button')
    setupCounter(button)
    expect(button.innerHTML).toBe('Count is 0')
  })

  it('increments counter upon click event', () => {
    const button = document.createElement('button')
    setupCounter(button)

    button.click()
    expect(button.innerHTML).toBe('Count is 1')

    button.click()
    expect(button.innerHTML).toBe('Count is 2')
  })
})
