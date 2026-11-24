(function () {
  var header = document.getElementById('siteHeader');
  if (!header) return;
  var toggle = header.querySelector('.nav-toggle');
  var dd = header.querySelector('.nav-dd');
  var ddBtn = dd.querySelector('.nav-dd-btn');
  function setDd(open) { dd.classList.toggle('open', open); ddBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  function setMenu(open) { header.classList.toggle('menu-open', open); toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); if (!open) setDd(false); }
  toggle.addEventListener('click', function () { setMenu(!header.classList.contains('menu-open')); });
  ddBtn.addEventListener('click', function (e) { e.stopPropagation(); setDd(!dd.classList.contains('open')); });
  header.querySelectorAll('.nav-links a').forEach(function (a) { a.addEventListener('click', function () { setDd(false); setMenu(false); }); });
  document.addEventListener('click', function (e) { if (!dd.contains(e.target)) setDd(false); });
})();
