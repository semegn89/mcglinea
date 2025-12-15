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

// Invoice form handling
(function () {
  const form = document.getElementById("invoice-form");
  const invoiceDoc = document.getElementById("invoice-document");
  const placeholder = document.getElementById("invoice-placeholder");
  const printBtn = document.getElementById("invoice-print-btn");

  if (!form || !invoiceDoc || !placeholder || !printBtn) {
    return;
  }

  function formatAmount(value) {
    const num = Number(value);
    if (!isFinite(num)) return "";
    return num.toFixed(2);
  }

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) return dateStr;
    return date.toISOString().slice(0, 10);
  }

  function generateInvoiceNumber() {
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const dateStr = `${mm}${dd}`;
    
    // Get or increment counter for today
    const storageKey = `mcglinea_invoice_counter_${dateStr}`;
    let counter = 1;
    
    try {
      const stored = window.localStorage?.getItem(storageKey);
      if (stored) {
        counter = parseInt(stored, 10) + 1;
      }
      window.localStorage?.setItem(storageKey, String(counter));
    } catch (e) {
      // If storage fails, use timestamp-based fallback
      counter = Date.now() % 1000;
    }
    
    return `MC${dateStr}-${counter}`;
  }

  function ensureDefaultDates() {
    const issueInput = document.getElementById("invoice-date");
    const dueInput = document.getElementById("invoice-due-date");
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const todayStr = `${yyyy}-${mm}-${dd}`;

    if (issueInput && !issueInput.value) {
      issueInput.value = todayStr;
    }
    if (dueInput && !dueInput.value) {
      const due = new Date(today);
      due.setDate(due.getDate() + 14);
      const dyyyy = due.getFullYear();
      const dmm = String(due.getMonth() + 1).padStart(2, "0");
      const ddd = String(due.getDate()).padStart(2, "0");
      dueInput.value = `${dyyyy}-${dmm}-${ddd}`;
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    ensureDefaultDates();

    const name = /** @type {HTMLInputElement} */ (
      document.getElementById("billing-name")
    )?.value.trim();
    const vat = /** @type {HTMLInputElement} */ (
      document.getElementById("billing-vat")
    )?.value.trim();
    const address = /** @type {HTMLTextAreaElement} */ (
      document.getElementById("billing-address")
    )?.value.trim();
    const country = /** @type {HTMLInputElement} */ (
      document.getElementById("billing-country")
    )?.value.trim();
    const email = /** @type {HTMLInputElement} */ (
      document.getElementById("billing-email")
    )?.value.trim();
    const amountRaw = /** @type {HTMLInputElement} */ (
      document.getElementById("invoice-amount")
    )?.value;
    const description = /** @type {HTMLInputElement} */ (
      document.getElementById("invoice-description")
    )?.value.trim();
    const issueDate = /** @type {HTMLInputElement} */ (
      document.getElementById("invoice-date")
    )?.value;
    const dueDate = /** @type {HTMLInputElement} */ (
      document.getElementById("invoice-due-date")
    )?.value;

    const amountFormatted = formatAmount(amountRaw);
    if (!name || !address || !country || !description || !amountFormatted) {
      return;
    }

    const invoiceNumberEl = document.getElementById("invoice-number");
    const issueDisplayEl = document.getElementById("invoice-date-display");
    const dueDisplayEl = document.getElementById("invoice-due-date-display");
    const buyerNameEl = document.getElementById("buyer-name");
    const buyerAddressEl = document.getElementById("buyer-address");
    const buyerCountryEl = document.getElementById("buyer-country");
    const buyerVatEl = document.getElementById("buyer-vat");
    const buyerEmailEl = document.getElementById("buyer-email");
    const itemDescEl = document.getElementById("invoice-item-description");
    const itemAmountEl = document.getElementById("invoice-item-amount");
    const totalAmountEl = document.getElementById("invoice-total-amount");

    if (
      !invoiceNumberEl ||
      !issueDisplayEl ||
      !dueDisplayEl ||
      !buyerNameEl ||
      !buyerAddressEl ||
      !buyerCountryEl ||
      !buyerVatEl ||
      !buyerEmailEl ||
      !itemDescEl ||
      !itemAmountEl ||
      !totalAmountEl
    ) {
      return;
    }

    invoiceNumberEl.textContent = generateInvoiceNumber();
    issueDisplayEl.textContent = formatDate(issueDate);
    dueDisplayEl.textContent = formatDate(dueDate);

    buyerNameEl.textContent = name;
    buyerAddressEl.textContent = address;
    buyerCountryEl.textContent = country;
    buyerVatEl.textContent = vat ? `VAT / Tax ID: ${vat}` : "";
    buyerEmailEl.textContent = email ? `Email: ${email}` : "";

    itemDescEl.textContent = description;
    itemAmountEl.textContent = amountFormatted;
    totalAmountEl.textContent = amountFormatted;

    placeholder.hidden = true;
    invoiceDoc.hidden = false;
    printBtn.disabled = false;
  });

  printBtn.addEventListener("click", () => {
    window.print();
  });
})();


