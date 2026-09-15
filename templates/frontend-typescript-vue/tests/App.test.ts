import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import App from '../src/App.vue'

describe('Vue + TypeScript App Component', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders starter title and badge', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('TemplateGen Starter')
    expect(wrapper.text()).toContain('Interactive Counter')
  })

  it('renders initial count and increments reactively upon click', async () => {
    const wrapper = mount(App)
    const button = wrapper.find('.btn')
    expect(button.text()).toBe('Count is 0')

    await button.trigger('click')
    expect(button.text()).toBe('Count is 1')

    await button.trigger('click')
    expect(button.text()).toBe('Count is 2')
  })
})
