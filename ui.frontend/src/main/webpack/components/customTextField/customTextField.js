(function () {
    "use strict";

    function initCustomTextField(wrapper) {
        var input = wrapper.querySelector(".custom-text-field__input");
        var charCount = wrapper.querySelector(".custom-text-field__char-count");

        if (!input) return;

        var maxLength = parseInt(input.getAttribute("maxlength"), 10);

        if (charCount && maxLength) {
            function updateCount() {
                var remaining = maxLength - input.value.length;
                charCount.textContent = remaining + " / " + maxLength;

                charCount.classList.remove("custom-text-field__char-count--warn", "custom-text-field__char-count--limit");

                if (remaining <= 0) {
                    charCount.classList.add("custom-text-field__char-count--limit");
                } else if (remaining <= maxLength * 0.2) {
                    charCount.classList.add("custom-text-field__char-count--warn");
                }
            }

            input.addEventListener("input", updateCount);
            updateCount();
        }
    }

    function init() {
        var fields = document.querySelectorAll(".custom-text-field");
        fields.forEach(function (field) {
            initCustomTextField(field);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

}());
