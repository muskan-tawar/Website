document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".jewellery-navbar");
    const backToTop = document.getElementById("backToTop");

    function updateNavbarState() {
        if (!navbar) return;
        if (window.scrollY > 24) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    updateNavbarState();
    window.addEventListener("scroll", updateNavbarState, { passive: true });

    if (backToTop) {
        function toggleBackToTop() {
            if (window.scrollY > 300) {
                backToTop.classList.add("visible");
            } else {
                backToTop.classList.remove("visible");
            }
        }

        toggleBackToTop();
        window.addEventListener("scroll", toggleBackToTop, { passive: true });
        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const cartCountEls = document.querySelectorAll("#cart-count");
    const cartTotalEls = document.querySelectorAll("#cart-total, .cart-price");

    function formatPrice(value) {
        return "$" + Number(value || 0).toFixed(2);
    }

    function syncCartSummary() {
        let cart = [];

        try {
            cart = JSON.parse(localStorage.getItem("jewelleryCart") || "[]");
        } catch (error) {
            cart = [];
        }

        if (!Array.isArray(cart)) {
            cart = [];
        }

        const totalItems = cart.reduce(function (sum, item) {
            return sum + Number(item.quantity || 0);
        }, 0);

        const totalAmount = cart.reduce(function (sum, item) {
            return sum + (Number(item.price || 0) * Number(item.quantity || 0));
        }, 0);

        cartCountEls.forEach(function (element) {
            element.textContent = totalItems;
        });

        cartTotalEls.forEach(function (element) {
            element.textContent = formatPrice(totalAmount);
        });
    }

    syncCartSummary();

    window.addEventListener("storage", function (event) {
        if (event.key === "jewelleryCart") {
            syncCartSummary();
        }
    });

    document.addEventListener("cart:update", syncCartSummary);
});
