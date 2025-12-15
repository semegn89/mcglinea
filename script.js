// Mobile navigation toggle
(function () {
  const nav = document.querySelector(".main-nav");
  if (!nav) return;

  const toggleButton = nav.querySelector(".nav-toggle");
  const navList = nav.querySelector(".nav-list");

  if (!toggleButton || !navList) return;

  toggleButton.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navList.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.tagName === "A") {
      navList.classList.remove("open");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
})();

// Smooth scrolling for same-page anchor links (basic)
(function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();

// Copy IBAN / SWIFT helpers
(function () {
  const buttons = document.querySelectorAll(".copy-btn");

  async function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      document.execCommand("copy");
    } finally {
      document.body.removeChild(textarea);
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy");
      const status = button.nextElementSibling;

      if (!value || !(status instanceof HTMLElement)) {
        return;
      }

      status.textContent = "";
      status.classList.remove("error");

      try {
        await copyText(value);
        status.textContent = "Copied";
      } catch (error) {
        status.textContent = "Could not copy";
        status.classList.add("error");
      }

      setTimeout(() => {
        status.textContent = "";
        status.classList.remove("error");
      }, 2200);
    });
  });
})();

// Footer year
(function () {
  const el = document.getElementById("year");
  if (!el) return;
  el.textContent = String(new Date().getFullYear());
})();

// Simple cookie consent banner
(function () {
  const STORAGE_KEY = "mcglinea_cookie_consent";
  const banner = document.querySelector(".cookie-banner");
  if (!banner) return;

  const accepted = window.localStorage
    ? window.localStorage.getItem(STORAGE_KEY) === "true"
    : false;

  if (!accepted) {
    banner.classList.add("visible");
  }

  const button = banner.querySelector("[data-cookie-accept]");
  if (!button) return;

  button.addEventListener("click", () => {
    try {
      window.localStorage && window.localStorage.setItem(STORAGE_KEY, "true");
    } catch (e) {
      // ignore storage errors
    }
    banner.classList.remove("visible");
  });
})();


