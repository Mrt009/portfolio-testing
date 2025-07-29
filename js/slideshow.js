
    document.addEventListener("DOMContentLoaded", function () {
        const portfolioItems = document.querySelectorAll(".team-classic .item");
        let currentItemIndex = 0;

        function showNextItem() {
            portfolioItems[currentItemIndex].classList.remove("active");
            currentItemIndex = (currentItemIndex + 1) % portfolioItems.length;
            portfolioItems[currentItemIndex].classList.add("active");
        }

        // Show the next item every 3 seconds
        setInterval(showNextItem, 3000);
    });
