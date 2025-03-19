let swiper = new Swiper(".mySwiper", {
    loop: true, // Infinite Loop
    autoplay: {
        delay: 2000, // 3 seconds per slide
        disableOnInteraction: false, // User interact kare tab bhi auto-slide chalu rahe
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

    // Tabs Functionality
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Remove active styles from all tabs
            tabs.forEach(t => t.classList.remove("text-black", "border-black"));
            contents.forEach(c => c.classList.add("hidden"));

            // Add active styles to the clicked tab
            tab.classList.add("text-black", "border-black");
            contents[index].classList.remove("hidden");
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const infoButton = document.querySelector(".info"); // Info icon button
        const moreInfoBox = document.getElementById("moreInfoBox"); // More Info Box
        const overlay = document.getElementById("overlay"); // Background Overlay
        const closeInfo = document.getElementById("closeInfo"); // Close button
    
        // Open More Info Box and Show Overlay
        infoButton.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            moreInfoBox.classList.remove("translate-y-full");
            overlay.classList.remove("hidden"); // Show overlay
        });
    
        // Close More Info Box and Hide Overlay
        closeInfo.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            moreInfoBox.classList.add("translate-y-full");
            overlay.classList.add("hidden"); // Hide overlay
        });
    
        // Close when clicking outside the box
        document.addEventListener("click", function (event) {
            if (!moreInfoBox.contains(event.target) && !infoButton.contains(event.target)) {
                moreInfoBox.classList.add("translate-y-full");
                overlay.classList.add("hidden"); // Hide overlay
            }
        });
    });
 