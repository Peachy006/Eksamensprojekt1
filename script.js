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