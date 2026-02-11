/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      #theme-next {
        /* Light palette: Phycat Caramel */
        --next-bg: #fffbeb;
        --next-bg-dark: #282a36;
        --next-card-bg: #fffdf7;
        --next-card-bg-dark: #2f3140;
        --next-card-border: #f8d7a8;
        --next-card-border-dark: #44475a;
        --next-text-primary: #78350f;
        --next-text-primary-dark: #f8f8f2;
        --next-text-secondary: #9a5b19;
        --next-text-secondary-dark: #7e8c9f;
        --next-accent: #c98a35;
        --next-accent-strong: #b57321;
        --next-accent-contrast: #3f2505;
        --next-accent-soft: #f8ece0;
        --next-accent-soft-dark: rgba(217, 118, 127, 0.18);
        --next-accent-soft-text: #78471c;
        --next-accent-soft-text-dark: #f1d4d7;
        --next-focus-ring: rgba(201, 138, 53, 0.24);
        --next-focus-ring-dark: rgba(217, 118, 127, 0.3);
      }

      /* 底色 */
      body {
        background-color: var(--next-bg, #fdf5e3);
      }
      .dark body {
        background-color: var(--next-bg-dark, #2f242d);
      }

      #theme-next {
        color: var(--next-text-primary);
      }
      .dark #theme-next {
        /* Dark palette: Phycat Vampire */
        --next-accent: #d9767f;
        --next-accent-strong: #c96a73;
        --next-accent-contrast: #fff1f1;
        --next-accent-soft: rgba(217, 118, 127, 0.14);
        --next-accent-soft-dark: rgba(217, 118, 127, 0.2);
        --next-accent-soft-text: #f4d9dc;
        --next-accent-soft-text-dark: #f6dfe1;
        --next-focus-ring: rgba(217, 118, 127, 0.28);
        --next-focus-ring-dark: rgba(201, 106, 115, 0.34);
        color: var(--next-text-primary-dark);
      }

      #theme-next .next-card {
        background-color: var(--next-card-bg);
        border-color: var(--next-card-border);
      }
      .dark #theme-next .next-card {
        background-color: var(--next-card-bg-dark);
        border-color: var(--next-card-border-dark);
      }

      #theme-next .next-muted {
        color: var(--next-text-secondary);
      }
      .dark #theme-next .next-muted {
        color: var(--next-text-secondary-dark);
      }

      #theme-next .next-link-accent {
        transition: color 150ms ease-in-out;
      }
      #theme-next .next-link-accent:hover {
        color: var(--next-accent-strong);
      }

      #theme-next .next-section-title {
        color: var(--next-text-secondary);
      }
      .dark #theme-next .next-section-title {
        color: var(--next-text-secondary-dark);
      }

      #theme-next .next-soft-chip {
        background-color: var(--next-accent-soft);
        border: 1px solid var(--next-card-border);
        color: var(--next-accent-soft-text);
      }
      .dark #theme-next .next-soft-chip {
        background-color: var(--next-accent-soft-dark);
        border-color: var(--next-card-border-dark);
        color: var(--next-accent-soft-text-dark);
      }
      #theme-next .next-soft-chip:hover {
        background-color: var(--next-accent);
        border-color: var(--next-accent);
        color: var(--next-accent-contrast);
      }
      .dark #theme-next .next-soft-chip:hover {
        background-color: var(--next-accent);
        border-color: var(--next-accent);
        color: var(--next-accent-contrast);
      }

      #theme-next .next-soft-chip-active {
        background-color: var(--next-accent-strong);
        border: 1px solid var(--next-accent-strong);
        color: var(--next-accent-contrast);
      }
      .dark #theme-next .next-soft-chip-active {
        background-color: var(--next-accent);
        border-color: var(--next-accent);
        color: var(--next-accent-contrast);
      }

      #theme-next .next-toc-active {
        color: var(--next-accent-strong);
        text-decoration: underline;
        font-weight: 700;
      }

      #theme-next .next-progress-track {
        background-color: var(--next-card-border);
      }
      .dark #theme-next .next-progress-track {
        background-color: var(--next-card-border-dark);
      }
      #theme-next .next-progress-fill {
        background-color: var(--next-accent);
        color: var(--next-accent-contrast);
      }

      #theme-next .next-footer {
        background-color: var(--next-bg);
        color: var(--next-text-secondary);
        border-top: 1px solid var(--next-card-border);
      }
      .dark #theme-next .next-footer {
        background-color: var(--next-bg-dark);
        color: var(--next-text-secondary-dark);
        border-top-color: var(--next-card-border-dark);
      }
      #theme-next .next-footer-muted {
        color: var(--next-text-secondary);
      }
      .dark #theme-next .next-footer-muted {
        color: var(--next-text-secondary-dark);
      }

      #theme-next .next-right-hover {
        transition: background-color 160ms ease-in-out, color 160ms ease-in-out;
      }
      #theme-next .next-right-hover:hover {
        background-color: var(--next-accent-soft);
        color: var(--next-accent-soft-text);
      }
      .dark #theme-next .next-right-hover:hover {
        background-color: var(--next-accent-soft-dark);
        color: var(--next-accent-soft-text-dark);
      }

      #theme-next .next-right-hover-chip {
        transition: background-color 160ms ease-in-out, color 160ms ease-in-out,
          border-color 160ms ease-in-out;
      }
      #theme-next .next-right-hover-chip:hover {
        background-color: var(--next-accent-soft);
        border-color: var(--next-accent);
        color: var(--next-accent-soft-text);
      }
      .dark #theme-next .next-right-hover-chip:hover {
        background-color: var(--next-accent-soft-dark);
        border-color: var(--next-accent);
        color: var(--next-accent-soft-text-dark);
      }

      #theme-next .next-right-active {
        background-color: var(--next-accent-soft);
        color: var(--next-accent-soft-text);
        border: 1px solid color-mix(in srgb, var(--next-accent), transparent 40%);
      }
      .dark #theme-next .next-right-active {
        background-color: var(--next-accent-soft-dark);
        color: var(--next-accent-soft-text-dark);
        border-color: color-mix(in srgb, var(--next-accent), transparent 28%);
      }
      #theme-next .next-right-active:hover {
        background-color: color-mix(in srgb, var(--next-accent), transparent 82%);
        color: var(--next-accent-soft-text);
      }
      .dark #theme-next .next-right-active:hover {
        background-color: color-mix(in srgb, var(--next-accent-strong), transparent 78%);
        color: var(--next-accent-soft-text-dark);
      }

      #theme-next #left .next-left-panel {
        border-color: var(--next-accent-soft);
      }
      .dark #theme-next #left .next-left-panel {
        border-color: var(--next-card-border-dark);
      }

      #theme-next .next-left-logo {
        background-image: linear-gradient(155deg, #3c2c23 0%, #4e3a2c 55%, #604737 100%);
      }

      #theme-next #left .next-left-panel #nav {
        color: var(--next-text-secondary);
      }
      .dark #theme-next #left .next-left-panel #nav {
        color: var(--next-text-secondary-dark);
      }

      #theme-next #left .next-left-panel #nav li {
        border-radius: 0.375rem;
      }
      #theme-next #left .next-left-panel #nav li:hover {
        background-color: var(--next-accent-soft);
        color: var(--next-accent-soft-text);
        box-shadow: none;
      }
      .dark #theme-next #left .next-left-panel #nav li:hover {
        background-color: var(--next-accent-soft-dark);
        color: var(--next-accent-soft-text-dark);
      }
      #theme-next #left .next-left-submenu-link:hover {
        background-color: var(--next-accent-soft);
        color: var(--next-accent-soft-text);
      }
      .dark #theme-next #left .next-left-submenu-link:hover {
        background-color: var(--next-accent-soft-dark);
        color: var(--next-accent-soft-text-dark);
      }

      #theme-next #left .next-left-tabs li.border-red-600,
      #theme-next #left .next-left-tabs li.text-red-600 {
        border-color: var(--next-accent-strong);
        color: var(--next-accent-strong);
      }
      #theme-next #left .next-left-about {
        background-color: var(--next-card-bg);
      }
      .dark #theme-next #left .next-left-about {
        background-color: var(--next-card-bg-dark);
      }

      #theme-next #left .next-left-author {
        color: var(--next-text-primary);
      }
      .dark #theme-next #left .next-left-author {
        color: var(--next-text-primary-dark);
      }
      #theme-next #left .next-left-bio {
        color: var(--next-text-secondary);
      }
      .dark #theme-next #left .next-left-bio {
        color: var(--next-text-secondary-dark);
      }
      #theme-next #left .next-left-social {
        color: var(--next-text-secondary);
      }
      .dark #theme-next #left .next-left-social {
        color: var(--next-text-secondary-dark);
      }
      #theme-next #left .next-left-social a:hover {
        color: var(--next-accent-strong);
      }

      #theme-next .next-accent-border {
        border-color: var(--next-accent);
      }

      #theme-next .next-focus-accent:focus-within {
        border-color: var(--next-accent);
        box-shadow: 0 0 0 2px var(--next-focus-ring);
      }
      .dark #theme-next .next-focus-accent:focus-within {
        border-color: var(--next-accent-strong);
        box-shadow: 0 0 0 2px var(--next-focus-ring-dark);
      }

      #theme-next .next-accent-button {
        border-color: var(--next-accent);
        background-color: var(--next-accent);
        color: var(--next-accent-contrast);
      }
      #theme-next .next-accent-button:hover {
        border-color: var(--next-accent-strong);
        background-color: var(--next-accent-strong);
      }
      #theme-next .next-accent-button:focus-visible {
        box-shadow: 0 0 0 2px var(--next-focus-ring);
      }
      .dark #theme-next .next-accent-button:focus-visible {
        box-shadow: 0 0 0 2px var(--next-focus-ring-dark);
      }

      /* 菜单下划线动画 */
      #theme-next .menu-link {
        text-decoration: none;
        background-image: linear-gradient(var(--next-accent), var(--next-accent));
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
      }
      #theme-next .menu-link:hover {
        background-size: 100% 2px;
        color: var(--next-accent);
      }
    `}</style>
  )
}

export { Style }
