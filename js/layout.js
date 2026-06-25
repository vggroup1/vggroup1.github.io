/* ============================================================
   VG GROUP — shared layout (header, nav, footer)
   Injected as template strings so it works from file:// too.
   ============================================================ */
(function () {
  "use strict";

  // ---- Company data (edit here in one place) -------------------
  var COMPANY = {
    name: "VG GROUP",
    legal: "ООО «ВИДЖИГРУПП»",
    tagline: "Пространство будущего",
    phone: "+7 965 751 6058",
    phoneHref: "tel:+79657516058",
    email: "VGgroup2020@gmail.com",
    site: "vggroup.spb.ru",
    address: "Санкт-Петербург, наб. Обводного канала, 118АХ, БЦ «Малевич», офис 231, 2 этаж",
    telegram: "https://t.me/vggroup2026",
    max: "https://max.ru/join/4rGqChqFvEFh_4GrTuwB-UKRNjbGB8b9mqjOB4R5Txc"
  };
  window.VG_COMPANY = COMPANY;

  // ---- Brand logo (original mark, extracted as transparent PNG) -
  var LOGO_MARK =
    '<img class="logo__mark" src="assets/img/logo-mark.png" alt="" aria-hidden="true" width="179" height="400">';

  function logo(extraClass) {
    return '<a href="index.html" class="logo ' + (extraClass || "") + '" aria-label="VG Group — на главную">' +
      LOGO_MARK +
      '<span class="logo__txt"><span class="logo__name">VG GROUP</span>' +
      '<span class="logo__tag">Пространство будущего</span></span></a>';
  }

  var caret = '<svg class="nav__caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
  var caretMob = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

  // ---- Menu definition ----------------------------------------
  var MENU = [
    { label: "Перегородки", href: "peregorodki.html", children: [
      { t: "Профильные каркасные с одинарным остеклением", h: "peregorodki.html#t1" },
      { t: "Профильные каркасные с двойным остеклением", h: "peregorodki.html#t2" },
      { t: "Профильные, одинарное, «стык в стык»", h: "peregorodki.html#t3" },
      { t: "Профильные, двойное, «стык в стык»", h: "peregorodki.html#t4" },
      { t: "Цельностеклянные «стык в стык»", h: "peregorodki.html#t5" },
      { t: "Лофт-перегородки", h: "peregorodki.html#t6" },
      { t: "Каркасные с глухим заполнением", h: "peregorodki.html#t7" },
      { t: "Раздвижные стеклянные", h: "peregorodki.html#t8" },
      { t: "Раздвижные глухие", h: "peregorodki.html#t9" },
      { t: "Мобильные напольные", h: "peregorodki.html#t10" },
      { t: "Мобильные мебельные", h: "peregorodki.html#t11" },
      { t: "Противопожарные (по запросу)", h: "peregorodki.html#t12" }
    ]},
    { label: "Двери", href: "dveri.html", children: [
      { t: "Двери в проёмы", h: "dveri.html#d1" },
      { t: "Двери в перегородки", h: "dveri.html#d2" },
      { t: "Уличные двери", h: "dveri.html#d3" },
      { t: "Противопожарные двери", h: "dveri.html#d4" }
    ]},
    { label: "Дизайнерские", href: "designerskie.html", children: [
      { t: "Радиусные (моллированные) стёкла", h: "designerskie.html#g1" },
      { t: "Гнутые под углом 90°", h: "designerskie.html#g2" }
    ]},
    { label: "А ещё", href: "ograzhdeniya.html", children: [
      { t: "Стеклянные ограждения", h: "ograzhdeniya.html" },
      { t: "Душевые перегородки", h: "dushevye.html" },
      { t: "Сантехнические перегородки", h: "santeh.html" },
      { t: "Облицовка стен", h: "oblicovka.html" },
      { t: "Мебель и ресепшен", h: "mebel.html" },
      { t: "Изделия из стекла", h: "izdeliya.html" }
    ]},
    { label: "О компании", href: "o-kompanii.html", children: [
      { t: "История компании", h: "o-kompanii.html#istoriya" },
      { t: "Партнёры", h: "o-kompanii.html#partnery" },
      { t: "Сертификаты", h: "o-kompanii.html#sertifikaty" },
      { t: "Отзывы", h: "otzyvy.html" },
      { t: "Строительным компаниям", h: "stroitelnym.html" },
      { t: "Дизайнерам", h: "dizaineram.html" }
    ]},
    { label: "Контакты", href: "kontakty.html", children: null }
  ];

  // ---- Partner logos (inline SVG) -----------------------------
  function wm(text, opts) {
    opts = opts || {};
    var w = opts.w || 150, fs = opts.fs || 19, ls = opts.ls || 0, fw = opts.fw || 800, fill = opts.fill || "#2b2e33";
    return '<svg viewBox="0 0 ' + w + ' 44" xmlns="http://www.w3.org/2000/svg">' +
      '<text x="' + (w / 2) + '" y="29" text-anchor="middle" font-family="Manrope, Arial, sans-serif" font-weight="' + fw + '" font-size="' + fs + '" letter-spacing="' + ls + '" fill="' + fill + '">' + text + '</text></svg>';
  }
  var LOGOS = [
    { n: "Huawei", svg:
      '<svg viewBox="0 0 150 44" xmlns="http://www.w3.org/2000/svg"><path d="M16 30c-3-4-3-9 1-15-1 6 1 11 5 14z" fill="#cf0a2c"/><path d="M26 30c3-4 3-9-1-15 1 6-1 11-5 14z" fill="#cf0a2c"/><text x="86" y="29" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="17" letter-spacing="1.5" fill="#2b2e33">HUAWEI</text></svg>' },
    { n: "ВКонтакте", svg:
      '<svg viewBox="0 0 110 44" xmlns="http://www.w3.org/2000/svg"><rect x="33" y="6" width="44" height="32" rx="10" fill="#07f"/><text x="55" y="28" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="16" fill="#fff">VK</text></svg>' },
    { n: "Avito", svg:
      '<svg viewBox="0 0 130 44" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="14" r="5" fill="#0af0a0"/><circle cx="34" cy="14" r="5" fill="#9b6dff"/><circle cx="20" cy="28" r="5" fill="#00aaff"/><circle cx="34" cy="28" r="5" fill="#ff4053"/><text x="84" y="29" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="18" fill="#2b2e33">avito</text></svg>' },
    { n: "МТС", svg:
      '<svg viewBox="0 0 90 44" xmlns="http://www.w3.org/2000/svg"><rect x="23" y="6" width="44" height="32" rx="7" fill="#e30611"/><text x="45" y="29" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="15" fill="#fff">МТС</text></svg>' },
    { n: "Газпром", svg:
      '<svg viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg"><path d="M16 8l7 9-7 9-7-9z" fill="#1e5ba8"/><path d="M16 16l4 5-4 5-4-5z" fill="#fff"/><text x="96" y="29" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="16" letter-spacing="1" fill="#1e5ba8">ГАЗПРОМ</text></svg>' },
    { n: "ГЕРОФАРМ", svg:
      '<svg viewBox="0 0 170 44" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="22" r="11" fill="#3aaa35"/><text x="16" y="27" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="13" fill="#fff">g</text><text x="102" y="29" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="15" letter-spacing=".5" fill="#2b2e33">ГЕРОФАРМ</text></svg>' },
    { n: "PAGE", svg:
      '<svg viewBox="0 0 120 44" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="116" height="36" rx="3" fill="none" stroke="#2b2e33" stroke-width="1.5"/><text x="60" y="29" text-anchor="middle" font-family="Manrope,Arial" font-weight="700" font-size="17" letter-spacing="6" fill="#2b2e33">PAGE</text></svg>' },
    { n: "Практик", svg:
      '<svg viewBox="0 0 150 44" xmlns="http://www.w3.org/2000/svg"><text x="75" y="29" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="18" fill="#16181d">(практик)</text></svg>' },
    { n: "АСТ-Азбука", svg:
      '<svg viewBox="0 0 150 44" xmlns="http://www.w3.org/2000/svg"><text x="26" y="30" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="20" fill="#e2231a">АСТ</text><text x="98" y="29" text-anchor="middle" font-family="Manrope,Arial" font-weight="700" font-size="14" fill="#2b2e33">Азбука</text></svg>' },
    { n: "FORT GROUP", svg: wm("FORT GROUP", { w: 160, fs: 16, ls: 1 }) },
    { n: "LEGENDA", svg: wm("LEGENDA", { w: 150, fs: 18, ls: 3 }) },
    { n: "Деловой Петербург", svg:
      '<svg viewBox="0 0 170 44" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="9" width="26" height="26" rx="4" fill="#c8102e"/><text x="17" y="28" text-anchor="middle" font-family="Manrope,Arial" font-weight="800" font-size="13" fill="#fff">ДП</text><text x="40" y="20" font-family="Manrope,Arial" font-weight="700" font-size="11.5" fill="#2b2e33">Деловой</text><text x="40" y="34" font-family="Manrope,Arial" font-weight="700" font-size="11.5" fill="#2b2e33">Петербург</text></svg>' },
    { n: "Слотекс", svg: wm("СЛОТЕКС", { w: 150, fs: 17, ls: 1.5 }) }
  ];
  function buildLogos() {
    return '<div class="logo-wall">' +
      LOGOS.map(function (l) { return '<div class="logo-tile" title="' + l.n + '">' + l.svg + '</div>'; }).join("") +
      '</div>';
  }

  // ---- Build desktop nav --------------------------------------
  function buildNav() {
    var html = '<nav class="nav" aria-label="Главное меню">';
    MENU.forEach(function (m) {
      if (m.children) {
        var wide = m.children.length > 6 ? " dropdown--wide" : "";
        html += '<div class="nav__item"><a class="nav__link" href="' + m.href + '">' + m.label + caret + '</a>';
        html += '<div class="dropdown' + wide + '">';
        html += m.children.map(function (c) { return '<a href="' + c.h + '">' + c.t + '</a>'; }).join("");
        html += '</div></div>';
      } else {
        html += '<div class="nav__item"><a class="nav__link" href="' + m.href + '">' + m.label + '</a></div>';
      }
    });
    html += '</nav>';
    return html;
  }

  // ---- Header --------------------------------------------------
  function buildHeader() {
    return '' +
      '<header class="header" id="siteHeader"><div class="header__inner">' +
        logo() +
        buildNav() +
        '<div class="header__actions">' +
          '<a class="header__phone" href="' + COMPANY.phoneHref + '">' + COMPANY.phone + '</a>' +
          '<a class="btn btn--primary btn--sm hide-sm" href="kontakty.html">Заказать расчёт</a>' +
          '<button class="burger" id="burger" aria-label="Меню" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '</div>' +
      '</div></header>' +
      buildMobileMenu();
  }

  function buildMobileMenu() {
    var html = '<div class="mobile-menu" id="mobileMenu">';
    MENU.forEach(function (m) {
      if (m.children) {
        html += '<div class="mm-group"><button class="mm-head">' + m.label + caretMob + '</button>' +
          '<div class="mm-sub"><a href="' + m.href + '"><b>Все: ' + m.label.toLowerCase() + '</b></a>' +
          m.children.map(function (c) { return '<a href="' + c.h + '">' + c.t + '</a>'; }).join("") +
          '</div></div>';
      } else {
        html += '<div class="mm-group"><a class="mm-head" href="' + m.href + '">' + m.label + '</a></div>';
      }
    });
    html += '<a class="btn btn--primary mm-cta" href="kontakty.html">Заказать расчёт</a>';
    html += '<div style="margin-top:24px;font-size:.95rem;color:var(--muted)">' +
      '<a href="' + COMPANY.phoneHref + '" style="display:block;font-weight:700;color:var(--ink);font-size:1.2rem;margin-bottom:6px">' + COMPANY.phone + '</a>' +
      '<a href="mailto:' + COMPANY.email + '">' + COMPANY.email + '</a></div>';
    html += '</div>';
    return html;
  }

  // ---- Footer --------------------------------------------------
  var ICON = {
    telegram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.94 4.6 18.6 19.2c-.25 1.1-.92 1.37-1.86.85l-5.14-3.79-2.48 2.39c-.27.27-.5.5-1.03.5l.37-5.2 9.46-8.55c.41-.36-.09-.57-.64-.2L5.05 12.13l-5.03-1.57C-.05 10.35-.07 9.67 1.2 9.18L20.59 1.7c.95-.36 1.78.22 1.35 2.9z" transform="translate(1)"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
  };

  function buildFooter() {
    var year = "2026";
    return '<footer class="footer"><div class="container">' +
      '<div class="footer__grid">' +
        '<div class="footer__brand">' + logo() +
          '<p class="footer__about">Строительная компания полного цикла: создаём современные внутренние пространства — стеклянные и профильные перегородки, двери, ограждения и изделия из стекла. От разработки и проектирования до монтажа и гарантийного сервиса.</p>' +
          '<div class="footer__social">' +
            '<a href="' + COMPANY.telegram + '" target="_blank" rel="noopener" aria-label="Telegram">' + ICON.telegram + '</a>' +
            '<a href="' + COMPANY.max + '" target="_blank" rel="noopener" aria-label="MAX">' + ICON.chat + '</a>' +
            '<a href="mailto:' + COMPANY.email + '" aria-label="Почта">' + ICON.mail + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer__col"><h4>Продукция</h4>' +
          '<a href="peregorodki.html">Перегородки</a>' +
          '<a href="dveri.html">Двери</a>' +
          '<a href="designerskie.html">Дизайнерские перегородки</a>' +
          '<a href="ograzhdeniya.html">Ограждения</a>' +
          '<a href="dushevye.html">Душевые перегородки</a>' +
          '<a href="izdeliya.html">Изделия из стекла</a>' +
        '</div>' +
        '<div class="footer__col"><h4>Компания</h4>' +
          '<a href="o-kompanii.html">О компании</a>' +
          '<a href="o-kompanii.html#partnery">Партнёры</a>' +
          '<a href="otzyvy.html">Отзывы</a>' +
          '<a href="stroitelnym.html">Строительным компаниям</a>' +
          '<a href="dizaineram.html">Дизайнерам</a>' +
          '<a href="kontakty.html">Контакты</a>' +
        '</div>' +
        '<div class="footer__col"><h4>Контакты</h4>' +
          '<a href="' + COMPANY.phoneHref + '" style="font-size:1.15rem;font-weight:700;color:#fff">' + COMPANY.phone + '</a>' +
          '<a href="mailto:' + COMPANY.email + '">' + COMPANY.email + '</a>' +
          '<p style="line-height:1.5">' + COMPANY.address + '</p>' +
          '<a class="link-arrow" style="color:var(--accent-2);padding-top:14px" href="kontakty.html">Заказать расчёт →</a>' +
        '</div>' +
      '</div>' +
      '<div class="footer__bottom">' +
        '<span>© ' + year + ' ' + COMPANY.legal + '. Все права защищены.</span>' +
        '<span>' + COMPANY.site + '</span>' +
      '</div>' +
    '</div></footer>';
  }

  // ---- Inject + behaviour -------------------------------------
  function inject() {
    var h = document.getElementById("site-header");
    var f = document.getElementById("site-footer");
    if (h) h.outerHTML = buildHeader();
    if (f) f.outerHTML = buildFooter();

    // partner logo wall(s)
    document.querySelectorAll("#logo-wall, .js-logos").forEach(function (el) {
      el.innerHTML = buildLogos();
    });

    // active link by current file
    var path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav__link").forEach(function (a) {
      var href = a.getAttribute("href").split("#")[0];
      if (href === path) a.classList.add("is-active");
    });

    // header solid on scroll
    var header = document.getElementById("siteHeader");
    function onScroll() {
      if (!header) return;
      if (window.scrollY > 20) header.classList.add("is-solid");
      else header.classList.remove("is-solid");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // burger
    var burger = document.getElementById("burger");
    if (burger) {
      burger.addEventListener("click", function () {
        var open = document.body.classList.toggle("menu-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    // mobile accordions
    document.querySelectorAll(".mm-group .mm-head").forEach(function (head) {
      if (head.tagName === "BUTTON") {
        head.addEventListener("click", function () {
          head.parentElement.classList.toggle("is-open");
        });
      }
    });
    // close mobile menu when navigating
    document.querySelectorAll(".mobile-menu a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        if (burger) burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
