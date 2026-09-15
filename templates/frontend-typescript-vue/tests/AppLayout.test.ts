import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AppLayout from '../src/components/AppLayout.vue'

describe('AppLayout Component', () => {
  it('renders navigation, slot content, and footer', () => {
    const wrapper = mount(AppLayout, {
      slots: {
        default: '<div class="test-slot">Inner Slot Content</div>',
      },
    })

    expect(wrapper.find('.test-slot').text()).toBe('Inner Slot Content')
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Built with TemplateGen')
  })

  it('toggles mobile menu when menu button is clicked', async () => {
    const wrapper = mount(AppLayout)
    const menuBtn = wrapper.find('.menu-btn')
    expect(menuBtn.exists()).toBe(true)

    await menuBtn.trigger('click')
    expect(wrapper.find('.mobile-menu').exists()).toBe(true)
  })
})
