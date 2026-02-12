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
        --next-bg-image:
          radial-gradient(circle at 12% 4%, rgba(249, 186, 99, 0.42) 0, rgba(249, 186, 99, 0) 32%),
          radial-gradient(circle at 92% 10%, rgba(232, 146, 65, 0.32) 0, rgba(232, 146, 65, 0) 36%),
          linear-gradient(180deg, #fffdf6 0%, #fff4dd 56%, #ffe8c4 100%),
          repeating-linear-gradient(0deg, rgba(139, 90, 43, 0.08) 0 1px, transparent 1px 30px),
          repeating-linear-gradient(90deg, rgba(139, 90, 43, 0.06) 0 1px, transparent 1px 30px);
        --next-bg-image-dark:
          radial-gradient(circle at 12% 4%, rgba(217, 118, 127, 0.28) 0, rgba(217, 118, 127, 0) 34%),
          radial-gradient(circle at 92% 10%, rgba(107, 114, 178, 0.24) 0, rgba(107, 114, 178, 0) 38%),
          linear-gradient(180deg, #1f212b 0%, #242735 52%, #1b1d28 100%),
          repeating-linear-gradient(0deg, rgba(248, 248, 242, 0.06) 0 1px, transparent 1px 30px),
          repeating-linear-gradient(90deg, rgba(248, 248, 242, 0.05) 0 1px, transparent 1px 30px);
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
      body,
      #theme-next {
        background-color: var(--next-bg, #fdf5e3);
        background-image: var(--next-bg-image, none);
        background-size: auto, auto, auto, 30px 30px, 30px 30px;
        background-attachment: fixed;
        background-position: center top;
        background-blend-mode: normal, normal, normal, multiply, multiply;
      }
      .dark body,
      .dark #theme-next {
        background-color: var(--next-bg-dark, #2f242d);
        background-image: var(--next-bg-image-dark, none);
        background-size: auto, auto, auto, 30px 30px, 30px 30px;
        background-attachment: fixed;
        background-position: center top;
        background-blend-mode: normal, normal, normal, screen, screen;
      }

      @media (max-width: 1024px) {
        body,
        #theme-next,
        .dark body {
          background-attachment: scroll;
        }
        .dark #theme-next {
          background-attachment: scroll;
        }
      }

      #theme-next {
        position: relative;
        isolation: isolate;
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
        color: #b47800;
        text-decoration: none;
        font-weight: 700;
        background-color: color-mix(in srgb, #f7a70a, #fff 84%);
        border-radius: 0.375rem;
        padding: 0.06rem 0.32rem;
      }
      .dark #theme-next .next-toc-active {
        color: var(--next-accent-soft-text-dark);
        background-color: color-mix(in srgb, var(--next-accent), transparent 74%);
      }

      #theme-next .catalog-item {
        color: #8a6770;
        border-radius: 0.45rem;
        transition: background-color 160ms ease-in-out, color 160ms ease-in-out;
      }
      #theme-next .catalog-item:hover {
        background-color: color-mix(in srgb, #f7a70a, #fff 90%);
        color: #b47800;
      }
      .dark #theme-next .catalog-item {
        color: var(--next-text-secondary-dark);
      }
      .dark #theme-next .catalog-item:hover {
        background-color: var(--next-accent-soft-dark);
        color: var(--next-accent-soft-text-dark);
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
      #theme-next .next-article-detail-button {
        border-color: #f5a300;
        background-color: #f7a70a;
        color: #fffaf0;
        transition:
          background-color 160ms ease,
          border-color 160ms ease,
          color 160ms ease,
          box-shadow 160ms ease,
          transform 160ms ease;
      }
      #theme-next .next-article-detail-button:hover {
        border-color: #eb9800;
        background-color: #ee9d03;
        color: #fffef9;
      }
      .dark #theme-next .next-article-detail-button {
        border-color: color-mix(in srgb, var(--next-accent), #ffffff 14%);
        background-color: color-mix(in srgb, var(--next-accent), #111827 14%);
        color: var(--next-accent-contrast);
        box-shadow: 0 2px 8px rgba(217, 118, 127, 0.2);
      }
      .dark #theme-next .next-article-detail-button:hover {
        border-color: color-mix(in srgb, var(--next-accent-strong), #ffffff 20%);
        background-color: color-mix(in srgb, var(--next-accent-strong), #ffffff 10%);
        color: var(--next-accent-contrast);
        box-shadow:
          0 8px 18px rgba(217, 118, 127, 0.34),
          0 0 0 1px rgba(255, 255, 255, 0.14);
        transform: translateY(-1px);
      }
      .dark #theme-next .next-article-detail-button:active {
        transform: translateY(0);
        box-shadow: 0 3px 10px rgba(217, 118, 127, 0.24);
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
