// Simple JavaScript for animation and interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Animation for story blocks on scroll
    const storyBlocks = document.querySelectorAll('.story-block');
    const features = document.querySelectorAll('.feature');
    
    // Simple animation on scroll
    function checkScroll() {
      const triggerBottom = window.innerHeight * 0.8;
      
      storyBlocks.forEach(block => {
        const blockTop = block.getBoundingClientRect().top;
        
        if (blockTop < triggerBottom) {
          block.style.opacity = '1';
          block.style.transform = 'translateY(0)';
        }
      });
      
      features.forEach((feature, index) => {
        const featureTop = feature.getBoundingClientRect().top;
        
        if (featureTop < triggerBottom) {
          setTimeout(() => {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
          }, index * 150); // Staggered animation
        }
      });
    }
    
    // Initialize styles for animation
    storyBlocks.forEach(block => {
      block.style.opacity = '0';
      block.style.transform = 'translateY(30px)';
      block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    features.forEach(feature => {
      feature.style.opacity = '0';
      feature.style.transform = 'translateY(30px)';
      feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check for elements in view on page load and scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    
    // Button interactions
    const reserveBtn = document.querySelector('.reserve-btn');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (reserveBtn) {
      reserveBtn.addEventListener('click', function() {
        // Replace with actual reservation functionality
        alert('Reservation system will be implemented here');
      });
    }
    
    if (menuBtn) {
      menuBtn.addEventListener('click', function() {
        // Replace with actual menu view functionality
        alert('Menu view will be implemented here');
      });
    }
  });