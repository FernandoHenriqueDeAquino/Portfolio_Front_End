$(document).ready(() => {
    $(".nav-toggle").on("click", () => {
        $("#nav-bar ul").slideToggle("medium");
    });

    $("#contact-form").on("submit", function (event) {
        event.preventDefault(); // Stop the form from submitting by default

        let isValid = true;

        // Validate each field
        if (!$("#name").val()) {
            alert("Preencha o campo nome");
            isValid = false;
        }

        if (!$("#email").val()) {
            alert("Preencha o campo email");
            isValid = false;
        }

        if (!$("#subject").val()) {
            alert("Preencha o campo assunto");
            isValid = false;
        }

        if (!$("#message").val()) {
            alert("Preencha o campo mensagem");
            isValid = false;
        }

        if (!isValid) {
            return; // Stop execution if validation fails
        }

        // If validation passes, let the form submit normally
        this.submit();
    });
});
