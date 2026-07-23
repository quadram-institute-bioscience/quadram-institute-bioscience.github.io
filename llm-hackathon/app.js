/* ── Dark / light theme toggle ─────────────────────────────── */
(function () {
  var t = document.querySelector('[data-theme-toggle]');
  var r = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  var d = stored || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  r.setAttribute('data-theme', d);

  function setIcon(theme) {
    if (!t) return;
    t.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
    t.innerHTML = theme === 'dark'
      ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  setIcon(d);
  if (t) {
    t.addEventListener('click', function () {
      d = d === 'dark' ? 'light' : 'dark';
      r.setAttribute('data-theme', d);
      try { localStorage.setItem('theme', d); } catch (e) {}
      setIcon(d);
    });
  }
})();

/* ── Conditional team-name field (registration page) ───────── */
(function () {
  var teamField = document.getElementById('team-name-field');
  if (!teamField) return;
  var radios = document.querySelectorAll('input[name="participation"]');

  function toggle() {
    var selected = document.querySelector('input[name="participation"]:checked');
    if (selected && selected.value === 'As part of an existing team') {
      teamField.classList.add('visible');
    } else {
      teamField.classList.remove('visible');
    }
  }
  radios.forEach(function (radio) { radio.addEventListener('change', toggle); });
  toggle();
})();
