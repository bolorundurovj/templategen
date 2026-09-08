import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '../app/app.vue'

describe('Nuxt App Component', () => {
  it('renders starter title and branding', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('TemplateGen Starter')
    expect(wrapper.text()).toContain('Interactive Counter')
  })

  it('renders initial count and increments reactively upon click', async () => {
    const wrapper = mount(App)
    const button = wrapper.find('button')
    expect(button.text()).toBe('Count is 0')

    await button.trigger('click')
    expect(button.text()).toBe('Count is 1')

    await button.trigger('click')
    expect(button.text()).toBe('Count is 2')
  })
})
