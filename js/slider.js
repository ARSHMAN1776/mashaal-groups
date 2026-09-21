/**
 * MASHAAL GROUPS - Business Cards Slider & Index Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.business-card');
  const indexSpans = document.querySelectorAll('.numbers-index span[data-index]');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  
  if (!cards.length) return;

  let currentIndex = 0;
  const totalCards = cards.length;

  function updateActiveCard(index) {
    currentIndex = (index + totalCards) % totalCards;
    
    // Update numeric indicator in header
    indexSpans.forEach((span, idx) => {
      if (idx === currentIndex) {
        span.classList.add('active');
        span.style.color = 'var(--text-dark-primary)';
        span.style.fontWeight = '700';
      } else {
        span.classList.remove('active');
        span.style.color = 'var(--text-dark-muted)';
        span.style.fontWeight = '500';
      }
    });

    // Smooth scroll card into view on small screens
    if (window.innerWidth <= 992) {
      cards[currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }

    // Highlight active card
    cards.forEach((card, idx) => {
      if (idx === currentIndex) {
        card.style.borderColor = 'rgba(107, 28, 40, 0.4)';
        card.style.boxShadow = '0 20px 45px rgba(36, 6, 12, 0.15)';
      } else {
        card.style.borderColor = 'rgba(0, 0, 0, 0.04)';
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
      }
    });
  }

  // Event Listeners for Arrows
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      updateActiveCard(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      updateActiveCard(currentIndex + 1);
    });
  }

  // Click on numbers directly
  indexSpans.forEach((span, idx) => {
    span.addEventListener('click', () => {
      updateActiveCard(idx);
    });
  });

  // Card hover syncs index
  cards.forEach((card, idx) => {
    card.addEventListener('mouseenter', () => {
      updateActiveCard(idx);
    });
  });
});
