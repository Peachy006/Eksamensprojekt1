document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('table-booking-form');
    const modal = document.getElementById('successModal');
    const closeBtn = document.getElementById('closeModal');
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const guests = document.getElementById('guests').value;
      
      if (name && email && date && time && guests) {
        // Show success modal
        modal.classList.add('active');
        
        // Reset form
        form.reset();
      }
    });
    
    closeBtn.addEventListener('click', function() {
      modal.classList.remove('active');
    });
    
    // Close modal if clicked outside
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });