// Initialize medium zoom.
$(document).ready(function () {
  // Update src to data-zoom-src for zoomable images to show original quality
  $("[data-zoomable][data-zoom-src]").each(function() {
    $(this).attr("src", $(this).attr("data-zoom-src"));
  });
  
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });

  // Add caption support using data-zoom-caption
  medium_zoom.on('open', (event) => {
    const target = medium_zoom.getZoomedImage();
    if (!target) return;
    const caption = target.getAttribute('data-zoom-caption');
    if (!caption) return;
    const overlay = document.createElement('div');
    overlay.className = 'zoom-caption-overlay';
    overlay.textContent = caption;
    document.body.appendChild(overlay);
    // position overlay at bottom center
    Object.assign(overlay.style, {
      position: 'fixed',
      left: '50%',
      bottom: '24px',
      transform: 'translateX(-50%)',
      background: 'rgba(0,0,0,0.7)',
      color: '#fff',
      padding: '6px 10px',
      borderRadius: '6px',
      fontSize: '0.9rem',
      zIndex: 9999,
      maxWidth: '90vw',
      textAlign: 'center',
      pointerEvents: 'none'
    });
  });

  medium_zoom.on('close', () => {
    const overlay = document.querySelector('.zoom-caption-overlay');
    if (overlay) overlay.remove();
  });
});
