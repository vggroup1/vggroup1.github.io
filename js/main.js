/* ============================================================
   VG GROUP — interactions
   ============================================================ */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function () {
    initReveal();
    initCounters();
    initGallery();
    initForm();
    initYear();
  });

  /* ---- Reveal on scroll ---- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach(function (e) { e.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---- Animated counters ---- */
  function initCounters() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var dur = 1400, start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          var val = target * eased;
          el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(0)) + suffix;
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---- Gallery lightbox ---- */
  function initGallery() {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
    if (!items.length) return;

    var sources = items.map(function (it) {
      return it.getAttribute("data-lightbox") || (it.querySelector("img") && it.querySelector("img").src);
    });
    var current = 0;

    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML =
      '<button class="lightbox__close" aria-label="Закрыть"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
      '<button class="lightbox__nav lightbox__nav--prev" aria-label="Назад"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>' +
      '<img alt="">' +
      '<button class="lightbox__nav lightbox__nav--next" aria-label="Вперёд"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>';
    document.body.appendChild(lb);
    var img = lb.querySelector("img");

    function show(i) {
      current = (i + sources.length) % sources.length;
      img.src = sources[current];
    }
    function open(i) { show(i); lb.classList.add("is-open"); document.body.style.overflow = "hidden"; }
    function close() { lb.classList.remove("is-open"); document.body.style.overflow = ""; }

    items.forEach(function (it, i) {
      it.addEventListener("click", function () { open(i); });
    });
    lb.querySelector(".lightbox__close").addEventListener("click", close);
    lb.querySelector(".lightbox__nav--prev").addEventListener("click", function () { show(current - 1); });
    lb.querySelector(".lightbox__nav--next").addEventListener("click", function () { show(current + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
  }

  /* ---- Contact form (mailto fallback, no backend needed) ---- */
  function initForm() {
    var forms = document.querySelectorAll("form[data-vg-form]");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var msg = form.querySelector(".form-msg");
        var name = (form.querySelector("[name=name]") || {}).value || "";
        var phone = (form.querySelector("[name=phone]") || {}).value || "";
        var email = (form.querySelector("[name=email]") || {}).value || "";
        var subject = (form.querySelector("[name=subject]") || {}).value || "";
        var message = (form.querySelector("[name=message]") || {}).value || "";
        var agree = form.querySelector("[name=agree]");

        if (!name.trim() || !phone.trim()) {
          if (msg) { msg.className = "form-msg err"; msg.textContent = "Пожалуйста, укажите имя и телефон."; }
          return;
        }
        if (agree && !agree.checked) {
          if (msg) { msg.className = "form-msg err"; msg.textContent = "Необходимо согласие на обработку персональных данных."; }
          return;
        }

        var to = (window.VG_COMPANY && window.VG_COMPANY.email) || "VGgroup2020@gmail.com";
        var body = "Имя: " + name + "\nТелефон: " + phone +
          (email ? "\nE-mail: " + email : "") +
          (subject ? "\nНаправление: " + subject : "") +
          (message ? "\n\nСообщение:\n" + message : "");
        var href = "mailto:" + to + "?subject=" + encodeURIComponent("Заявка с сайта VG Group") +
          "&body=" + encodeURIComponent(body);

        if (msg) {
          msg.className = "form-msg ok";
          msg.textContent = "Спасибо, " + name.split(" ")[0] + "! Заявка сформирована — откроется почтовый клиент для отправки. Мы свяжемся с вами в ближайшее время.";
        }
        form.reset();
        window.location.href = href;
      });
    });
  }

  /* ---- Footer year (if any data-year) ---- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }
})();
