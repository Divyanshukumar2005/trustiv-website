// Trustiv site interactions

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Duplicate marquee content once for a seamless loop
  document.querySelectorAll('.marquee-track').forEach(function (track) {
    if (track.dataset.doubled) return;
    track.innerHTML += track.innerHTML;
    track.dataset.doubled = 'true';
  });

  // Testimonials: "Read more" opens the full quote in a modal (keeps card grid tidy)
  var testiQuotes = document.querySelectorAll('.testi-quote');
  if (testiQuotes.length) {
    var overlay = document.createElement('div');
    overlay.className = 'testi-modal-overlay';
    overlay.innerHTML =
      '<div class="testi-modal" role="dialog" aria-modal="true">' +
      '<button type="button" class="testi-modal-close" aria-label="Close">&times;</button>' +
      '<span class="testi-mark">\u201C</span>' +
      '<p class="testi-modal-quote"></p>' +
      '<div class="testi-modal-foot">' +
      '<span class="testi-avatar"></span>' +
      '<div><div class="testi-name"></div><div class="testi-role"></div></div>' +
      '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    var modalQuote = overlay.querySelector('.testi-modal-quote');
    var modalAvatar = overlay.querySelector('.testi-avatar');
    var modalName = overlay.querySelector('.testi-name');
    var modalRole = overlay.querySelector('.testi-role');
    var closeBtn = overlay.querySelector('.testi-modal-close');

    function closeModal() {
      overlay.classList.remove('is-open');
    }
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    testiQuotes.forEach(function (quote) {
      requestAnimationFrame(function () {
        if (quote.scrollHeight > quote.clientHeight + 2) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'testi-read-more';
          btn.textContent = 'Read more';
          quote.insertAdjacentElement('afterend', btn);
          btn.addEventListener('click', function () {
            var card = quote.closest('.testi-card');
            modalQuote.textContent = quote.textContent.trim();
            modalAvatar.textContent = card.querySelector('.testi-avatar') ? card.querySelector('.testi-avatar').textContent : '';
            modalName.textContent = card.querySelector('.testi-name') ? card.querySelector('.testi-name').textContent : '';
            modalRole.textContent = card.querySelector('.testi-role') ? card.querySelector('.testi-role').textContent : '';
            overlay.classList.add('is-open');
          });
        }
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(function (o) {
        o.classList.remove('is-open');
