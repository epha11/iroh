document.addEventListener("DOMContentLoaded", function() {
    // Show first section by default
    document.getElementById("system").classList.add("active");

    // Dark Mode Toggle
    document.getElementById("darkModeToggle").addEventListener("change", function() {
        document.body.style.backgroundColor = this.checked ? "#1e1e1e" : "#ffffff";
        document.body.style.color = this.checked ? "#ffffff" : "#000000";
    });

    // Bluetooth Toggle
    document.getElementById("bluetoothToggle").addEventListener("change", function() {
        alert(this.checked ? "Bluetooth Enabled" : "Bluetooth Disabled");
    });

    // Wi-Fi Toggle
    document.getElementById("wifiToggle").addEventListener("change", function() {
        alert(this.checked ? "Wi-Fi Connected" : "Wi-Fi Disconnected");
    });
});

// Show selected section
function showSection(id) {
    document.querySelectorAll(".settings-section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

// Show system info
function showSystemInfo() {
    document.getElementById("systemInfo").innerText = "OS: Floki OS\nVersion: 1.0\nRAM: 8GB\nProcessor: Intel i7";
}

// Change wallpaper
function changeWallpaper() {
    alert("Wallpaper changed!");
}

// Log out function
function logout() {
    alert("Logged out");
}
