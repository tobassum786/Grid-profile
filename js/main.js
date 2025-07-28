document.addEventListener('DOMContentLoaded', function() {
    const iconBackground = document.getElementById("icon-background");
    
    // Define the icons to use (removed duplicate bi-git)
    const icons = ["bi-css", "bi-filetype-html", "bi-javascript", "bi-filetype-jsx", "bi-git", "bi-braces", "bi-docker", "bi-linux"];
    
    // Reduce the number of icons for better performance
    const iconCount = 50;
    
    for (let i = 0; i < iconCount; i++) {
        const icon = document.createElement("i");
        // Get a random icon from the array
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        icon.classList.add("bi", randomIcon, "background-icon");
        
        // Position the icon randomly within the container
        icon.style.top = `${Math.random() * 100}%`;
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.fontSize = `${14 + Math.random() * 16}px`; // Smaller size range
        icon.style.transform = `rotate(${Math.random() * 360}deg)`; // Full rotation range
        icon.style.opacity = `${0.1 + Math.random() * 0.3}`; // Make icons semi-transparent
        
        // Add the icon to the background container
        iconBackground.appendChild(icon);
    }
});