(function () {
  'use strict';

  /* ===== CONFIGURAÇÃO (edite aqui) ===== */
  var WHATSAPP = '5511977539348';
  var MESSAGE = 'Olá, Sophia! Vi seu portfólio e gostaria de saber mais sobre o Plano Conteúdo & Presença.';
  // Caminhos relativos: funcionam em usuario.github.io/repositorio/
  var IMAGES = {
    sophia: 'assets/img/sophia.jpg', sophia2: 'assets/img/sophia-2.jpg',
    moda: 'assets/img/moda.jpg', igreja: 'assets/img/institucional.jpg',
    work1: 'assets/img/trabalho-1.jpg', work2: 'assets/img/trabalho-2.jpg', work3: 'assets/img/trabalho-3.jpg',
    work4: 'assets/img/trabalho-4.jpg', work5: 'assets/img/trabalho-5.jpg', work6: 'assets/img/trabalho-6.jpg',
    qr: 'assets/img/qrcode-whatsapp.png'
  };
  /* ===================================== */

  var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(MESSAGE);
  document.querySelectorAll('[data-wa]').forEach(function (a) { a.href = url; });

  // Imagens: se o arquivo não existir, o espaço reservado continua visível
  document.querySelectorAll('.ph[data-img]').forEach(function (box) {
    var src = IMAGES[box.getAttribute('data-img')];
    if (!src) return;
    var img = new Image();
    img.alt = box.getAttribute('aria-label') || box.getAttribute('data-label') || '';
    img.loading = 'lazy';
    img.onload = function () { box.appendChild(img); box.classList.add('loaded'); };
    img.src = src;
  });

  // Página atual no menu
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#menu a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.setAttribute('aria-current', 'page');
  });

  // Menu móvel
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });
})();
