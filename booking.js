document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('table-booking-form');
    const modal = document.getElementById('successModal');
    const closeBtn = document.getElementById('closeModal');
    
    // minimum dato skal være i dag, skal måske fjernes
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // bare noget simpel validation og variabler
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const guests = document.getElementById('guests').value;
      
      if (name && email && date && time && guests) {
        // vis modalet for succes
        modal.classList.add('active');
        
        // reset form
        form.reset();
      }
    });
    
    closeBtn.addEventListener('click', function() {
      modal.classList.remove('active');
    });
    
    // Luk popup modalet hvis du klikker ude for boksen
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });