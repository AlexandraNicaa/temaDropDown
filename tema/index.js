const dropdownButton = document.querySelector(".show-dropdown")
const menuIcon = document.querySelector(".menu-icon")

menuIcon.addEventListener("click", function() {
    const dropdownMenuStyles = getComputedStyle(dropdownButton);
    const display = dropdownMenuStyles.getPropertyValue("display");
    
    if (display === "flex") {
        dropdownButton.style.display = "none";
    } else {
        dropdownButton.style.display = "flex";
    }
})
