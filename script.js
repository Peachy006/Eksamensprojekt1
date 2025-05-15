function toggleMenu() {
    let menu = document.getElementById("menudiv");
    // Use getComputedStyle to check the actual computed value of 'top'
    let currentTop = window.getComputedStyle(menu).top;

    if (currentTop === "0px") {
        menu.style.top = "-100%"; // Close the menu
    } else {
        menu.style.top = "0"; // Open the menu
    }
}

fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
})
.catch(error => console.log(error));

fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
})
.catch(error => console.log(error));




document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }
  });



