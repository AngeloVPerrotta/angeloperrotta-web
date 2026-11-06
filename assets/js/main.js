(function () {
  var SITES = [
    { url: 'https://darkgrey-dunlin-388433.hostingersite.com', label: 'goldculturebsas.com',
      img: 'assets/img/gold.jpg', alt: 'Sitio de Gold Boys & Girls Culture',
      cap: 'Barbería y salón. Turnos, equipo, cursos y productos.' },
    { url: 'https://culturaldebanfield.com.ar/', label: 'culturaldebanfield.com.ar',
      img: 'assets/img/cultural.jpg', alt: 'Sitio de la Cultural Inglesa de Banfield',
      cap: 'Instituto de inglés. Inscripción online, cursos y test de nivelación.' },
    { url: null, label: 'decles.com.ar',
      img: 'assets/img/decles.jpg', alt: 'Sitio de DE.CL.ES.',
      cap: 'Clínica dermatológica. Reserva de consulta y catálogo de productos.' },
    { url: null, label: 'queenvaps.com.ar',
      img: 'assets/img/queenvaps.jpg', alt: 'Sitio de Queen Vaps',
      cap: 'Tienda online. Catálogo y stock actualizados desde una planilla.' },
    { url: null, label: 'fresasshowroom.com.ar',
      img: 'assets/img/fresas.jpg', alt: 'Sitio de Fresas Showroom',
      cap: 'Showroom de indumentaria en Banfield. Catálogo y contacto directo.' }
  ];

  var tabs  = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var frame = document.getElementById('frame');
  var url   = document.getElementById('url');
  var open  = document.getElementById('open');
  var cap   = document.getElementById('cap');
  if (!tabs.length || !frame) return;

  function show(i) {
    var s = SITES[i];
    if (!s) return;
    frame.src = s.img;
    frame.alt = s.alt;
    url.textContent = s.label;
    cap.textContent = s.cap;
    if (s.url) {
      open.href = s.url;
      open.textContent = 'Abrir';
      open.removeAttribute('aria-disabled');
    } else {
      open.removeAttribute('href');
      open.textContent = 'Privado';
      open.setAttribute('aria-disabled', 'true');
    }
    tabs.forEach(function (t, k) {
      var on = k === i;
      t.classList.toggle('is-on', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(i); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      var n = (i + d + tabs.length) % tabs.length;
      tabs[n].focus(); show(n);
    });
  });

  // precargar para que el cambio de pestaña sea instantáneo
  SITES.forEach(function (s) { var im = new Image(); im.src = s.img; });
})();
