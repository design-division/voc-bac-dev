  function loadButtonEffect() {
    const mq = window.matchMedia("(min-width: 62em)");
    function wrapText() {
      const buttons = document.querySelectorAll(
        ".sqs-block-button-element, .image-button-inner .sqs-button-element--primary, .sqs-system-button"
      );
      buttons.forEach((button) => {
        if (button.querySelector(".text-wrap.top") || button.querySelector(".text-wrap.bottom")) return;
        let text = "";
        const label = button.querySelector(".form-submit-button-label");
        if (label) {
          text = label.textContent.trim();
          button.innerHTML = "";
        } else {
          text = button.textContent.trim();
          button.textContent = "";
        }
        if (!text) return;
        const top = document.createElement("span");
        top.className = "text-wrap top";
        top.textContent = text;
        const bottom = document.createElement("span");
        bottom.className = "text-wrap bottom";
        bottom.textContent = text;
        button.appendChild(top);
        button.appendChild(bottom);
      });
    }
    function unwrapText() {
      const buttons = document.querySelectorAll(
        ".sqs-block-button-element, .image-button-inner .sqs-button-element--primary, .sqs-system-button"
      );
      buttons.forEach((button) => {
        const topSpan = button.querySelector(".text-wrap.top");
        if (topSpan) {
          const originalText = topSpan.textContent;
          button.textContent = originalText;
        }
      });
    }
    function init() {
      mq.matches ? wrapText() : unwrapText();
    }
    mq.addEventListener("change", (e) => {
      e.matches ? wrapText() : unwrapText();
    });
    const observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (mutation.addedNodes.length > 0 && mq.matches) {
          wrapText();
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    init();
  }
  document.addEventListener("DOMContentLoaded", loadButtonEffect);
