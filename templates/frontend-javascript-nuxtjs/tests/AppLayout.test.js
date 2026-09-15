import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AppLayout from '../components/AppLayout.vue';

describe('AppLayout in Nuxt', () => {
  it('renders navigation and slot content', () => {
    const wrapper = mount(AppLayout, {
      slots: {
        default: '<div class="slot-content">Nuxt Content</div>',
      },
    });

    expect(wrapper.find('.slot-content').text()).toBe('Nuxt Content');
    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('Built with TemplateGen');
  });

  it('toggles mobile menu on button click', async () => {
    const wrapper = mount(AppLayout);
    const menuBtn = wrapper.find('.menu-btn');
    expect(menuBtn.exists()).toBe(true);

    await menuBtn.trigger('click');
    expect(wrapper.find('.mobile-menu').exists()).toBe(true);
  });
});
