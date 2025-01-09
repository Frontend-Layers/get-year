(function () {
  let cachedElements = null;

  /**
   * Module for inserting current year into HTML elements
   * Supports any HTML element with data-get-year attribute for custom selector
   */

  /**
   * Parse the data-get-year attribute value
   *
   * @param {string} attrValue - The value of data-get-year attribute
   * @returns {string|null} CSS selector for target elements or null
   */
  const parseAttribute = (attrValue) => {
    return attrValue ? attrValue.trim() : null;
  };

  /**
   * Get current year
   *
   * @returns {number} Current year
   */
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  /**
   * Process a single element with data-get-year attribute
   *
   * @param {HTMLElement} element - Element to process
   */
  const processElement = (el) => {
    const elAttr = el.getAttribute('data-get-year');
    const customSelector = parseAttribute(elAttr);

    if (customSelector) {
      // If custom selector provided, update all matching elements
      const targets = document.querySelectorAll(customSelector);
      if (targets.length === 0) {
        console.warn(`No elements found matching selector: ${customSelector}`);
        return;
      }
      targets.forEach(target => {
        target.textContent = getCurrentYear();
      });
    } else {
      // Otherwise update the element itself
      el.textContent = getCurrentYear();
    }
  };

  /**
   * Initialize the year inserter
   * Finds all elements with data-get-year attribute and default class
   */
  const init = () => {
    if (cachedElements === null) {
      cachedElements = document.querySelectorAll('[data-get-year], .current-year');
    }
    if (!cachedElements.length) return;
    Array.from(cachedElements).forEach(el => processElement(el));
  };

  // Auto-initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', init);
})();