// kigger om page er loadet
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item');


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
