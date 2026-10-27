(function () {
  'use strict';
  var y = document.getElementById('year'); if (y) y.textContent = String(new Date().getFullYear());
  var fig = document.querySelector('.strike');
  if (!fig) return;
  if (!('IntersectionObserver' in window)) { fig.classList.add('is-in'); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { fig.classList.add('is-in'); io.disconnect(); } });
  }, { threshold: 0.6 });
  io.observe(fig);
})();
