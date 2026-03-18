/* ================================
   AD Lab Portfolio — js/main.js
   Builds experiment cards & marquee
   ================================ */

/**
 * Builds all experiment cards dynamically from the
 * experiments array defined in js/data.js
 */
function buildCards() {
  const grid = document.getElementById('card-grid');

  experiments.forEach((exp, idx) => {
    const card = document.createElement('div');
    card.className = 'card';

    const statusClass = exp.status === 'completed' ? 'completed' : 'progress';
    const statusLabel = exp.status === 'completed' ? '● Completed' : '◌ In Progress';

    card.innerHTML = `
      <div class="tooltip">
        <div class="tooltip-row">
          <span class="tooltip-key">Stack</span>
          <span class="tooltip-val">${exp.stack}</span>
        </div>
        <div class="tooltip-divider"></div>
        <div class="tooltip-row">
          <span class="tooltip-key">Date</span>
          <span class="tooltip-val">${exp.date}</span>
        </div>
        <div class="tooltip-row">
          <span class="tooltip-key">Goal</span>
          <span class="tooltip-val">${exp.objective}</span>
        </div>
      </div>

      <div class="card-top">
        <span class="exp-badge">EXP_${exp.num}</span>
        <span class="status-badge ${statusClass}">${statusLabel}</span>
      </div>

      <div class="card-title">${exp.title}</div>
      <div class="card-desc">${exp.desc}</div>

      <button class="pdf-btn" onclick="openModal(${idx})">View PDF Report</button>

      <div class="card-footer">
        <a href="#" class="view-btn">View Project</a>
        <span class="card-num">${exp.num}</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

/**
 * Builds the infinite scrolling marquee strip from
 * experiment labels. Duplicates the list for seamless looping.
 */
function buildMarquee() {
  const track = document.getElementById('marquee-track');
  const labels = experiments.map(e => `EXP_${e.num} — ${e.title}`);
  const all = [...labels, ...labels]; // duplicate for seamless loop

  all.forEach((label, i) => {
    const span = document.createElement('span');
    span.textContent = label;
    track.appendChild(span);

    if (i < all.length - 1) {
      const dot = document.createElement('span');
      dot.className = 'marquee-dot';
      dot.textContent = '◆';
      track.appendChild(dot);
    }
  });
}

// Initialise on page load
buildCards();
buildMarquee();
