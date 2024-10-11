document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.settings').removeAttribute('hidden');
  fitVids();
});

/* Theme toggle */
customElements.define(
  'theme-toggle',
  class extends HTMLElement {
    #theme = 'light';

    constructor() {
      super();
      this.#theme = localStorage.getItem('user-color-scheme') || 'light';
    }

    connectedCallback() {
      this.querySelector('input').checked = this.#theme === 'dark';

      this.querySelector('input').addEventListener('change', () => {
        this.#theme = this.#theme === 'light' ? 'dark' : 'light';
        window.applyThemeSetting(this.#theme);
      });
    }
  },
);

/* Code wrap */
customElements.define(
  'code-wrap',
  class extends HTMLElement {
    #wrapCode = true;

    constructor() {
      super();
      const value = localStorage.getItem('wrap-code');
      this.#wrapCode = value !== 'false';
    }

    connectedCallback() {
      this.querySelector('input').checked = this.#wrapCode;
      document.body.classList.toggle('wrap-code', this.#wrapCode);

      this.querySelector('input').addEventListener('change', () => {
        this.#wrapCode = !this.#wrapCode;
        localStorage.setItem('wrap-code', this.#wrapCode);
        document.body.classList.toggle('wrap-code', this.#wrapCode);
      });
    }
  },
);

/* Elevator button */
customElements.define(
  'elevator-button',
  class extends HTMLElement {
    #a = null;
    #target = null;

    constructor() {
      super();
      this.addEventListener('click', () => {
        const detailsEl = document.querySelector('.main-menu');
        detailsEl.open = true;
      });

      document.addEventListener('scroll', () => {
        if (this.isTargetInViewport()) {
          this.#a.classList.remove('active');
          return;
        }
        this.#a.classList.add('active');
      });
    }

    connectedCallback() {
      this.#a = this.querySelector('a');
      this.#target = document.querySelector(this.#a.getAttribute('href'));
    }

    isTargetInViewport() {
      return isInViewport(this.#target);
    }
  },
);

// Determine if an element is in the visible viewport
function isInViewport(el, partiallyVisible = false) {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

function fitVids() {
  const videoSources = ['iframe[src*="youtube"]', 'iframe[src*="vimeo"]'];

  document.querySelectorAll(videoSources.join(',')).forEach((video) => {
    video.style.width = '100%';
    video.style.height = 'auto';
    video.style.aspectRatio = `${video.getAttribute(
      'width',
    )} / ${video.getAttribute('height')}`;
  });
}
