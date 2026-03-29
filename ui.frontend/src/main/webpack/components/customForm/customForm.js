import template from "./customForm.hbs";
import "./customForm.scss";

// ─── Storybook export ─────────────────────────────────────
export const CustomForm = (args) => {
  return template(args);
};

// ─── AEM runtime: form submission handler ─────────────────
(function initCustomForm() {
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".custom-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector("#cf-name").value;
      const email = form.querySelector("#cf-email").value;
      const message = form.querySelector("#cf-message").value;

      const data = new URLSearchParams();
      data.append("name", name);
      data.append("email", email);
      data.append("message", message);

      fetch("/bin/submitForm", {
        method: "POST",
        body: data,
      })
        .then(function (response) { return response.text(); })
        .then(function () {
          alert("Form submitted successfully");
        });
    });
  });
})();
