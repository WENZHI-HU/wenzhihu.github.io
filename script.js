document.addEventListener('DOMContentLoaded', () => {
    createStarField(150);
  });
  
  function createStarField(count) {
    const starField = document.getElementById('starfield');
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      star.style.left = x + '%';
      star.style.top = y + '%';
      const size = Math.random() * 3;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.animationDelay = Math.random() + 's';
      starField.appendChild(star);
    }
  }
  
  function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  }
