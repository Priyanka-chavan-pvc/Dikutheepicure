
  document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");
    const links = document.querySelectorAll("#navbar-collapse .nav-link.scrollto");
    
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });

    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          links.forEach(l => l.classList.remove("active"));
          this.classList.add("active");
        }
      });
    });
  });

// Init SimpleLightbox for gallery images
document.addEventListener("DOMContentLoaded", function () {
  var lightbox = new SimpleLightbox('.media-item a.mask', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250
  });
});

document.addEventListener('DOMContentLoaded', function () {

  /* Initialize Bootstrap Carousel */
  const heroCarouselEl = document.querySelector('.bg-slider-wrapper .carousel');
  if (heroCarouselEl) {
    new bootstrap.Carousel(heroCarouselEl, {
      interval: 5000, // 5 seconds per slide
      ride: 'carousel',
      pause: 'hover', // pause when hovered
      wrap: true      // loop continuously
    });
  }

  /* Scroll-down arrow click */
  const arrow = document.querySelector('.arrow-holder img');
  if (arrow) {
    arrow.addEventListener('click', function () {
      const nextSection = document.querySelector('#about'); // change to your next section ID
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

});

document.addEventListener('DOMContentLoaded', function () {
    const lightbox = new SimpleLightbox('.media-item .mask', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 200
    });
  });
  
document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.news-wrapper .more-link');
  items.forEach(link => {
    link.addEventListener('click', function (e) {
      // Optional: Analytics tracking or additional behaviors
      console.log('Opening modal:', this.getAttribute('data-bs-target'));
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll to Contact section
  document.querySelectorAll('a[href="#contact"]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Animate border width on scroll
  const border = document.querySelector('.title-border');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      border.style.width = entry.isIntersecting ? '80px' : '50px';
    });
  }, { threshold: 0.2 });
  observer.observe(border);
});
document.addEventListener('DOMContentLoaded', () => {
  // Smooth-scrolling anchor
  document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Title-border expansion on scroll
  const borderEl = document.querySelector('.title-border');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      borderEl.style.width = entry.isIntersecting ? '80px' : '50px';
    });
  }, { threshold: 0.2 });
  obs.observe(borderEl);
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.subscribe-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('.email-field');
      const email = input.value;
      if (email && email.includes('@')) {
        alert('Thanks for subscribing!');
        input.value = '';
      } else {
        alert('Please enter a valid email.');
      }
    });
  }

  document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'translateY(-3px)';
      icon.style.transition = 'transform 0.2s';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'none';
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Animate title border when modal is shown
  const reserveModal = document.getElementById('reserve-modal');
  const borderEl = reserveModal?.querySelector('.title-border');

  reserveModal?.addEventListener('shown.bs.modal', () => {
    if (borderEl) borderEl.style.width = '80px';
  });
  reserveModal?.addEventListener('hidden.bs.modal', () => {
    if (borderEl) borderEl.style.width = '50px';
  });

  // Form validation feedback
  const form = document.getElementById('reserve-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('is-invalid');
      } else {
        field.classList.remove('is-invalid');
      }
    });

    if (isValid) {
      alert('Thanks! Your reservation request has been received.');
      form.reset();
      const modal = bootstrap.Modal.getInstance(reserveModal);
      modal.hide();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Animate title on modal show/hide for subtle UX
  document.querySelectorAll('.news-modal').forEach(modalEl => {
    const title = modalEl.querySelector('.modal-title');
    modalEl.addEventListener('shown.bs.modal', () => {
      title.style.transform = 'scale(1.05)';
      title.style.transition = 'transform 0.3s';
    });
    modalEl.addEventListener('hidden.bs.modal', () => {
      title.style.transform = 'none';
    });
  });
});


  document.addEventListener('DOMContentLoaded', function () {
    // Select all 'a.mask' inside the featured Signature Dishes section
    const lightbox = $('.featured .mask').simpleLightbox({
      captions: function (element) {
        // Use .item-title text as caption
        return $(element).find('.item-title').text();
      },
      captionDelay: 250,
      nav: true,
      close: true,
      showCounter: false
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 80
    });
  });

  gumshoe.init({
    selector: '#site-nav a',
    selectorHeader: '[data-gumshoe-header]',  // helps offset fixed headers
    activeClass: 'active',
    offset: 80,      // adjust based on your header height
    reflow: true     // recalculates positions on layout changes
  });


window.addEventListener('scroll', function() {
  document.querySelector('.header').classList.remove('scrolled');
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector('#heroCarousel');
  const carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000,
    ride: 'carousel'
  });

  // Example: Pause on click
  carousel.addEventListener('click', () => {
    carouselInstance.pause();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const panel = document.getElementById('config-panel');
  const trigger = document.getElementById('config-trigger');
  const closeBtn = document.getElementById('config-close');
  const themeOptions = document.querySelectorAll('#color-options li');

  // Toggle panel visibility
  trigger.addEventListener('click', () => {
    panel.classList.toggle('config-panel-hide');
  });
  closeBtn.addEventListener('click', () => {
    panel.classList.add('config-panel-hide');
  });

  // Switch theme stylesheet
  themeOptions.forEach(option => {
    option.addEventListener('click', () => {
      themeOptions.forEach(el => el.classList.remove('active'));
      option.classList.add('active');

      const cssFile = option.querySelector('a').getAttribute('data-style');
      let link = document.getElementById('theme-style-link');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'stylesheet';
        link.id = 'theme-style-link';
        document.head.appendChild(link);
      }
      link.href = cssFile;
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const configPanel = document.getElementById("config-panel");
    const configTrigger = document.getElementById("config-trigger");
    const configClose = document.getElementById("config-close");
    const colorOptions = document.querySelectorAll("#color-options li");

    // Open/close panel
    configTrigger.addEventListener("click", function(e) {
        e.preventDefault();
        configPanel.classList.toggle("config-panel-open");
        configPanel.classList.toggle("config-panel-hide");
    });

    configClose.addEventListener("click", function(e) {
        e.preventDefault();
        configPanel.classList.remove("config-panel-open");
        configPanel.classList.add("config-panel-hide");
    });

    // Theme color change
    colorOptions.forEach(function(li) {
        li.addEventListener("click", function(e) {
            e.preventDefault();
            // Remove active from all
            colorOptions.forEach(el => el.classList.remove("active"));
            // Add active to clicked
            li.classList.add("active");

            // Change CSS variable or apply color
            const newColor = li.querySelector("a").getAttribute("data-color");
            document.documentElement.style.setProperty("--theme-color", newColor);
        });
    });
});

