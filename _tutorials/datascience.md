---
title: "Data Science Group"
date: 2018-11-18T12:33:46+10:00
featured: false
weight: 1
layout: tutorial
---

## Data Science Group

The [Data Science Group](https://github.com/quadram-institute-bioscience/datasciencegroup/wiki) brings people together across QI and the wider NRP who are interested in data science,
bioinformatics, statistics, and related computational disciplines. 
Our monthly meetings feature informal presentations on research projects, methods, tools, or challenges, 
followed by open discussion and knowledge exchange.

The Data Science Group *usually* meets on the last Tuesday of the month, from 2-4pm in UG55A or UG44A 
(check the calendar event or intranet for the exact location). 
Presentations are typically 20-30 minutes, with plenty of time for questions and discussion. 
Everyone is welcome to attend, whether you're presenting or just interested in the topic.


### Join the mailing list

To be updated on our future meetings (currently only for NRP students and staff):

<form id="ds-mailing-list"
      action="https://formspree.io/f/mpqbnjly"
      method="POST"
      novalidate>

  <label for="ds-name">Name:</label>
  <input type="text" id="ds-name" name="name" required autocomplete="given-name" />

  <label for="ds-surname">Surname:</label>
  <input type="text" id="ds-surname" name="surname" required autocomplete="family-name" />

  <label for="ds-email">Email address:</label>
  <input type="email"
         id="ds-email"
         name="email"
         required
         autocomplete="email"
         pattern="^[^@\s]+@(quadram\.ac\.uk|nbi\.ac\.uk|earlham\.ac\.uk|jic\.ac\.uk|tsl\.ac\.uk|uea\.ac\.uk)$"
         title="Email must end with @quadram.ac.uk, @nbi.ac.uk, @earlham.ac.uk, @jic.ac.uk, @tsl.ac.uk or @uea.ac.uk" />

  <p id="ds-error" style="color:#b00; display:none; margin-top:.5em;"></p>

  <button type="submit">Join the mailing list</button>
</form>

<script>
(function () {
  const ALLOWED = [
    'quadram.ac.uk',
    'nbi.ac.uk',
    'earlham.ac.uk',
    'jic.ac.uk',
    'tsl.ac.uk',
    'uea.ac.uk'
  ];

  const form  = document.getElementById('ds-mailing-list');
  const email = document.getElementById('ds-email');
  const err   = document.getElementById('ds-error');

  function isAllowed(value) {
    const v = (value || '').trim().toLowerCase();
    const at = v.lastIndexOf('@');
    if (at === -1) return false;
    const domain = v.slice(at + 1);
    return ALLOWED.includes(domain);
  }

  function setError(msg) {
    if (msg) {
      err.textContent = msg;
      err.style.display = 'block';
      email.setCustomValidity(msg);
    } else {
      err.textContent = '';
      err.style.display = 'none';
      email.setCustomValidity('');
    }
  }

  email.addEventListener('input', function () {
    if (email.value && !isAllowed(email.value)) {
      setError('Please use an institutional address (' + ALLOWED.map(d => '@' + d).join(', ') + ').');
    } else {
      setError('');
    }
  });

  form.addEventListener('submit', function (e) {
    if (!isAllowed(email.value)) {
      e.preventDefault();
      setError('Only institutional addresses are accepted: ' + ALLOWED.map(d => '@' + d).join(', ') + '.');
      email.focus();
    }
  });
})();
</script>
