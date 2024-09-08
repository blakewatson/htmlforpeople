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
  }
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
