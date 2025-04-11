// kigger om page er loadet
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item');

  //kigger om den uderstøtter det der seje loading noget

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Giv hvert element en lille forsinkelse i rækkefølge
    menuItems.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
      observer.observe(item);
    });
  } else {
    // Hvis observer ikke virker
    menuItems.forEach(item => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    });
  }

  // Hover-effekt: skift farve på h3
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const heading = item.querySelector('h3');
      if (heading) heading.style.color = '#9d0208';
    });

    item.addEventListener('mouseleave', () => {
      const heading = item.querySelector('h3');
      if (heading) heading.style.color = '';
    });
  });

  // Klar til filtrering senere
  console.log('Filtering is not implemented yet.');
});
