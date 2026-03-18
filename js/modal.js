/* ================================
   AD Lab Portfolio — js/modal.js
   Handles PDF modal open/close
   ================================ */

/**
 * Converts a Google Drive share link into an embeddable preview URL.
 * Input:  https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * Output: https://drive.google.com/file/d/FILE_ID/preview
 */
function driveEmbedUrl(url) {
  if (!url) return '';
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://drive.google.com/file/d/${match[1]}/preview`;
  return url;
}

/**
 * Opens the PDF modal for the experiment at the given index.
 * @param {number} idx - Index of the experiment in the data array
 */
function openModal(idx) {
  const exp = experiments[idx];
  const modal = document.getElementById('pdfModal');
  const body = document.getElementById('modalBody');
  const driveLink = document.getElementById('modalDriveLink');

  document.getElementById('modalTitle').textContent = `EXP_${exp.num} — ${exp.title}`;

  if (exp.pdf) {
    driveLink.href = exp.pdf;
    driveLink.style.display = 'inline-block';
    const embedUrl = driveEmbedUrl(exp.pdf);
    body.innerHTML = `
      <div class="modal-iframe-wrap">
        <iframe src="${embedUrl}" allow="autoplay" loading="lazy"></iframe>
      </div>`;
  } else {
    driveLink.style.display = 'none';
    body.innerHTML = `
      <div class="modal-no-pdf">
        <p>No PDF linked yet for this experiment.</p>
        <p>Add your Google Drive share link to the pdf field in js/data.js</p>
      </div>`;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/** Closes the PDF modal and clears its content. */
function closeModal() {
  document.getElementById('pdfModal').classList.remove('open');
  document.getElementById('modalBody').innerHTML = '';
  document.body.style.overflow = '';
}

// Close modal when clicking the dark overlay background
document.getElementById('pdfModal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// Close modal on pressing Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
