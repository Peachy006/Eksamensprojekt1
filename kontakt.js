// JavaScript for Contact Page

document.addEventListener('DOMContentLoaded', function() {
  
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Form validation
        if (!name || !email || !subject || !message) {
          showNotification('Please fill in all required fields', 'error');
          return;
        }
        
        // Email validation
        if (!isValidEmail(email)) {
          showNotification('Please enter a valid email address', 'error');
          return;
        }
        
        // Here you would typically send the form data to a server
        // For now, we'll just simulate a successful submission
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
          // Reset the form
          contactForm.reset();
          
          // Reset button
          submitBtn.textContent = originalBtnText;
          submitBtn.disabled = false;
          
          // Show success message
          showNotification('Your message has been sent successfully! We\'ll get back to you soon.', 'success');
        }, 1500);
      });
    }
    
    // Email validation function
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    // Notification function
    function showNotification(message, type) {
      // Check if notification container exists, create if not
      let notificationContainer = document.querySelector('.notification-container');
      
      if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
        
        // Add styles for the notification container
        notificationContainer.style.position = 'fixed';
        notificationContainer.style.top = '20px';
        notificationContainer.style.right = '20px';
        notificationContainer.style.zIndex = '1000';
      }
      
      // Create notification element
      const notification = document.createElement('div');
      notification.className = `notification ${type}`;
      notification.textContent = message;
      
      // Style the notification
      notification.style.backgroundColor = type === 'success' ? '#4CAF50' : '#F44336';
      notification.style.color = 'white';
      notification.style.padding = '12px 24px';
      notification.style.marginBottom = '10px';
      notification.style.borderRadius = '4px';
      notification.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
      notification.style.transform = 'translateX(100%)';
      notification.style.opacity = '0';
      notification.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      
      // Add close button
      const closeBtn = document.createElement('span');
      closeBtn.innerHTML = '&times;';
      closeBtn.style.marginLeft = '10px';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.fontWeight = 'bold';
      closeBtn.style.float = 'right';
      
      closeBtn.addEventListener('click', function() {
        removeNotification(notification);
      });
      
      notification.appendChild(closeBtn);
      notificationContainer.appendChild(notification);
      
      // Animate notification in
      setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
      }, 10);
      
      // Auto remove after 5 seconds
      setTimeout(() => {
        removeNotification(notification);
      }, 5000);
    }
    
    function removeNotification(notification) {
      notification.style.transform = 'translateX(100%)';
      notification.style.opacity = '0';
      
      setTimeout(() => {
        if (notification.parentElement) {
          notification.parentElement.removeChild(notification);
        }
      }, 300);
    }
    
    // Map interaction
    const viewMapBtn = document.querySelector('.view-map-btn');
    
    if (viewMapBtn) {
      viewMapBtn.addEventListener('click', function() {
        // This would typically open Google Maps in a new tab with the location
        window.open('https://maps.google.com/?q=123+Dragon+Street+Chinatown+New+York+NY+10013', '_blank');
      });
    }
    
    // Input field animations
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
    
    formInputs.forEach(input => {
      // Add focus effects
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
      });
    });
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.contact-info, .contact-form-container, .map-container');
    
    function checkScroll() {
      const triggerBottom = window.innerHeight * 0.8;
      
      animateElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, index * 200); // Staggered animation
        }
      });
    }
    
    // Initialize styles for animation
    animateElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check for elements in view on page load and scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
  });