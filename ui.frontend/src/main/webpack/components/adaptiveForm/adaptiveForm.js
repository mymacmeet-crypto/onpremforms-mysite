document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.querySelector("#guideContainer-rootPanel-guidetextbox___widget").value;
        const email = document.querySelector("#guideContainer-rootPanel-guidetextbox_1610440807___widget").value;
        const message = document.querySelector("#guideContainer-rootPanel-guidetextbox_940553033___widget").value;

        const data = new URLSearchParams();

        data.append("name", name);
        data.append("email", email);
        data.append("message", message);

        fetch("/bin/submitForm", {
            method: "POST",
            body: data
        })
        .then(response => response.text())
        .then(data => {
            alert("Form submitted successfully");
        });

    });

});
