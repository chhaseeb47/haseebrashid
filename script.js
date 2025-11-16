
function sendWhatsApp() {
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var url = `https://wa.me/923001234567?text=Name:%20${name}%0ANumber:%20${number}`;
    window.open(url, '_blank');
}




// Toggle theme menu visibility
function toggleThemeMenu() {
    const menu = document.getElementById("themeMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Apply selected theme
document.querySelectorAll(".theme-color").forEach(color => {
    color.addEventListener("click", () => {
        const themeName = color.getAttribute("data-theme");
        document.body.className = themeName;
    });
});

