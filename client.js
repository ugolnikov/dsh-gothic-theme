window.__ModuleLoader__.load({
  id: "dsh-gothic-theme",
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    // [token, light value, dark value] — one layer stacked over the active light/dark palette.
    // Palette: black, grey, red, burgundy.
    const palette = [
      ['--dsw-alias-bg-base', '#f1efec', '#0b0b0b'],
      ['--dsw-alias-bg-layer-1', '#f8f6f3', '#141414'],
      ['--dsw-alias-bg-layer-2', '#ebe7e3', '#191919'],
      ['--dsw-alias-bg-layer-3', '#e2ddd8', '#202020'],
      ['--dsw-alias-bg-overlay', '#e9e5e1', '#242424'],
      ['--dsw-alias-bg-module-platform', '#ebe7e3', '#1b1b1b'],
      ['--dsw-alias-bg-multi-select', '#ebe7e3', '#191919'],
      ['--dsw-alias-bg-skeleton', '#1a1a1a12', '#ffffff10'],
      ['--dsw-alias-bg-document-selection', 'color-mix(in srgb, #b3202a 40%, transparent)', 'color-mix(in srgb, #b3202a 40%, transparent)'],
      ['--dsw-specific-sidebar-fill', '#e6e1dc', '#0d0d0d'],
      ['--dsw-specific-sidebar-nav-item-active', '#e6dbdb', '#212121'],
      ['--dsw-specific-sidebar-nav-item-active-accent', '#d9c1c3', '#2f1619'],
      ['--dsw-specific-input-major', '#f8f6f3', '#151515'],
      ['--dsw-specific-login-input', '#f2efec', '#0f0f0f'],
      ['--dsw-specific-bubble', '#e8dcdc', '#1c1414'],
      ['--dsw-specific-bubble-highlight', '#dcc3c5', '#2c1719'],
      ['--dsw-specific-selector', '#e2ddd8', '#202020'],
      ['--dsw-specific-tip', '#e9e5e1', '#1b1b1b'],
      ['--dsw-menu-surface-fill', '#f6f3f0e6', '#141414e6'],
      ['--dsw-alias-menu-group-header-fill', '#f6f3f0f0', '#141414f0'],
      ['--dsw-alias-border-l1', '#1a1a1a14', '#ffffff12'],
      ['--dsw-alias-border-l2', '#1a1a1a20', '#ffffff1f'],
      ['--dsw-alias-border-l3', '#1a1a1a2b', '#ffffff2e'],
      ['--dsw-alias-border-l4', '#1a1a1a3a', '#ffffff40'],
      ['--dsw-alias-markdown-code-block', '#ebe7e3', '#101010'],
      ['--dsw-alias-markdown-code-block-banner', '#e2ddd8', '#181818'],
      ['--dsw-alias-markdown-inline-code', '#e9e5e1', '#1c1c1c'],
      ['--dsw-alias-markdown-citation', '#efe1e1', '#1d1515'],
      ['--dsw-alias-markdown-tag', '#e2ddd8', '#1c1c1c'],
      ['--dsw-alias-markdown-placeholder', '#e8e3df', '#202020'],
      ['--dsw-alias-markdown-code-segment-selected', '#f6f3f0', '#272727'],
      ['--dsw-alias-markdown-code-segment-unselected', '#e8e3df', '#101010'],
      ['--dsw-alias-label-primary', '#1a1515', '#e9e6e2'],
      ['--dsw-alias-label-secondary', '#4e4744', '#b8b3ad'],
      ['--dsw-alias-label-tertiary', '#6b6460', '#938e88'],
      ['--dsw-alias-label-caption', '#6f6763', '#8b857f'],
      ['--dsw-alias-label-dimmed', '#d8d3ce', '#2d2d2d'],
      ['--dsw-alias-label-primary-dimmed', '#241f1f', '#d9d5d0'],
      ['--dsw-alias-label-primary-bluish', '#2c1f1f', '#e9e6e2'],
      ['--dsw-alias-label-primary-inverted', '#f6f2ef', '#f6f2ef'],
      ['--dsw-alias-label-primary-foreground', '#f6f2ef', '#f6f2ef'],
      ['--dsw-alias-label-shimmer', 'color-mix(in srgb, #1a1a1a 33%, transparent)', 'color-mix(in srgb, #e9e6e2 45%, transparent)'],
      ['--dsw-alias-menu-icon', '#3d3633', '#d9d5d0'],
      ['--dsw-alias-link', '#8f1d25', '#e06565'],
      ['--dsw-alias-brand-text', '#8f1d25', '#e06a6a'],
      ['--dsw-alias-brand-primary', '#8f1d25', '#a11f2b'],
      ['--dsw-alias-brand-primary-invert', '#8f1d25', '#a11f2b'],
      ['--dsw-alias-brand-primary-new-colorprimary-new-color', '#8f1d25', '#d24a52'],
      ['--dsw-alias-label-deep-diving', '#8f1d25', '#e06a6a'],
      ['--dsw-alias-label-deep-diving-shimmer', '#a83342', '#f09090'],
      ['--dsw-alias-state-business-primary', '#8f1d25', '#d24a52'],
      ['--dsw-alias-state-business-tertiary', '#ead7d9', '#2c1719'],
      ['--dsw-alias-state-error-primary', '#8f1d25', '#e05656'],
      ['--dsw-alias-state-error-secondary', '#a83342', '#c43c3c'],
      ['--dsw-alias-state-success-primary', '#4c6b52', '#6f8f74'],
      ['--dsw-alias-state-warn-primary', '#8a5a13', '#c08a4a'],
      ['--dsw-alias-state-idle-primary', '#c0bab4', '#5b5550'],
      ['--dsw-alias-state-done-primary', '#8f1d25', '#a11f2b'],
      ['--dsw-alias-interactive-bg-hover', '#1a1a1a0f', '#ffffff14'],
      ['--dsw-alias-interactive-bg-active', '#1a1a1a1f', '#ffffff24'],
      ['--dsw-alias-interactive-bg-hover-solid', '#e9e4df', '#272727'],
      ['--dsw-alias-interactive-bg-hover-accent', '#8f1d2524', '#e0565626'],
      ['--dsw-alias-interactive-bg-hover-danger', '#8f1d2518', '#e0565626'],
      ['--dsw-alias-button-primary-fill', '#8f1d25', '#a11f2b'],
      ['--dsw-alias-button-primary-hover', '#a83342', '#bd2a36'],
      ['--dsw-alias-button-info-fill', '#8f1d25', '#a11f2b'],
      ['--dsw-alias-button-info-hover', '#a83342', '#bd2a36'],
      ['--dsw-alias-button-primary-dimmed', '#ded9d4', '#332527'],
      ['--dsw-alias-button-floating-fill', '#f8f6f3', '#1b1b1b'],
      ['--dsw-alias-button-floating-hover', '#ebe7e3', '#262626'],
      ['--dsw-alias-button-elevated-fill', '#f8f6f3', '#191919'],
      ['--dsw-alias-button-ghost-active-fill', '#e2ddd8', '#262626'],
      ['--dsw-alias-button-ghost-active-border', '#6b6460', '#938e88'],
      ['--dsw-alias-scrollbar-bg-l1', '#c4beb8', '#3a3a3a'],
      ['--dsw-alias-scrollbar-bg-l2', '#bbb4ae', '#4a4a4a'],
      ['--dsw-alias-scrollbar-hover-l1', '#aea7a0', '#4a4a4a'],
      ['--dsw-alias-scrollbar-hover-l2', '#a39c95', '#5a5a5a'],
      ['--dsw-alias-toast-bg', '#2a1618', '#2a1618'],
      ['--dsw-alias-toast-label', '#f4f0ec', '#f4f0ec'],
      ['--dsw-alias-tooltip-bg', '#241f1f', '#1c1c1c'],
      ['--dsw-alias-tooltip-key-bg', '#3a3230', '#303030'],
      ['--dsw-alias-switch-thumb', '#f8f6f3', '#a9a49e'],
    ];
    const tokens = Object.fromEntries(palette.map(([name, light, dark]) => [name, { light, dark }]));

    /** Gothic window emblem for the brand marks: pointed arch, rose and mullion. */
    function GothicMark({ size }) {
      return h('svg', {
        viewBox: '0 0 24 24',
        width: size,
        height: size,
        'aria-hidden': true,
        style: { display: 'block', color: 'var(--dsw-alias-brand-text)' },
      },
        h('path', {
          d: 'M5 21V10Q5 5 12 2Q19 5 19 10V21',
          fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinejoin: 'round',
        }),
        h('path', { d: 'M12 21v-8', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' }),
        h('circle', { cx: 12, cy: 10, r: 2.6, fill: 'none', stroke: 'currentColor', strokeWidth: 1.4 }),
        h('path', { d: 'M3.5 21h17', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' }),
      );
    }

    /** Small cross after each Session row's time label. */
    function RowCross() {
      return h('span', {
        'aria-hidden': true,
        style: { marginLeft: 4, fontSize: 10, lineHeight: 1, color: 'var(--dsw-alias-brand-text)', opacity: 0.85 },
      }, '†');
    }

    /** Sidebar wordmark, in the serif face the theme uses instead of the official artwork. */
    function BrandName() {
      return h('span', {
        style: {
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 17,
          lineHeight: 1.2,
          letterSpacing: '0.02em',
          color: 'var(--dsw-alias-label-primary)',
          whiteSpace: 'nowrap',
        },
      }, 'DeepSeek Harness');
    }

    return {
      inject: ['theme', 'slots'],
      apply(ctx) {
        ctx.effect(() => ctx.theme.overrideTokens("dsh-gothic-theme", tokens));
        // Single slots throw when already occupied; a shipped owner must not break the theme.
        const claim = (slot, Component) => {
          try {
            return ctx.slots.register({ name: slot }, Component);
          } catch (error) {
            console.error(`[gothic-theme] ${slot} is occupied; keeping the shipped occupant.`, error);
            return;
          }
        };
        ctx.slots.inject('conversation.hero.brand.mark', () => claim('conversation.hero.brand.mark', GothicMark));
        ctx.slots.inject('sidebar.brand.mark', () => claim('sidebar.brand.mark', GothicMark));
        ctx.slots.inject('sidebar.brand.name', () => claim('sidebar.brand.name', BrandName));
        ctx.slots.inject('sidebar.session.row.trailing', () =>
          ctx.slots.register({ name: 'sidebar.session.row.trailing', id: 'gothic-cross', order: 9 }, RowCross));
      },
    };
  },
});
