// Create an init function that will be called when the page loads
// It should set the root variables to a specific color depending on the light mode of the device
function updateColors() {
    // Set the root variables to the colors of the light mode
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        document.documentElement.style.setProperty(
            "--background-color",
            "whitesmoke"
        );
        document.documentElement.style.setProperty("--text-color", "black");

        document.head.innerHTML = document.head.innerHTML.replace(
            '<link rel="icon" href="rk-white.png" type="image/png">',
            '<link rel="icon" href="rk-black.png" type="image/png">'
        );
    }
    // Set the root variables to the colors of the dark mode
    else {
        document.documentElement.style.setProperty(
            "--background-color",
            "#00001c"
        );
        document.documentElement.style.setProperty(
            "--text-color",
            "whitesmoke"
        );

        document.head.innerHTML = document.head.innerHTML.replace(
            '<link rel="icon" href="rk-black.png" type="image/png">',
            '<link rel="icon" href="rk-white.png" type="image/png">'
        );
        }
}

// Call the updateColors function initially
updateColors();

// Listen for changes in the color scheme and call the updateColors function
window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", updateColors);
