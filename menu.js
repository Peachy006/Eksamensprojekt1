// Simple animation and interactivity for the menu section
document.addEventListener('DOMContentLoaded', function() {
    // Animate menu items on scroll
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const menuObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            menuObserver.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
      });
      
      // Initialize menu items with opacity 0 and observe them
      menuItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        menuObserver.observe(item);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      menuItems.forEach(item => {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
      });
    }
    
    // Add hover effects for menu items
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.querySelector('h3').style.color = '#9d0208';
      });
      
      item.addEventListener('mouseleave', function() {
        this.querySelector('h3').style.color = '';
      });
    });
    
    // Simple filtering functionality - for future enhancement
    const setupFiltering = () => {
      // This is a placeholder for potential filtering functionality
      // Can be expanded later with category buttons
      console.log('Menu filtering ready for implementation');
    };
    
    setupFiltering();
  });