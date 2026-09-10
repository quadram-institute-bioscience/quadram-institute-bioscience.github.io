// Quadram Institute homepage sketch — light interactions only.
document.addEventListener('DOMContentLoaded', function () {
  // News filter chips: purely visual state for the sketch.
  var chips = document.querySelectorAll('[data-chip]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) {
        c.style.borderColor = 'rgba(47,61,70,0.15)';
        c.style.color = 'rgba(47,61,70,0.7)';
      });
      chip.style.borderColor = 'rgba(47,61,70,0.25)';
      chip.style.color = '#2F3D46';
    });
    chip.style.cursor = 'pointer';
  });
});
