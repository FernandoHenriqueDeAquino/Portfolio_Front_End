$(document).ready(() => {
    $(".nav-toggle").on("click", () => {
        $("#nav-bar ul").slideToggle("medium");
    });

    $("#contact-form").on("submit", function (event) {
        event.preventDefault(); // Stop default form submission

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let subject = $("#subject").val().trim();
        let message = $("#message").val().trim();
        let isValid = true;

        // Simple validation
        if (!name) {
            alert("Preencha o campo nome");
            isValid = false;
        }

        if (!email) {
            alert("Preencha o campo email");
            isValid = false;
        }

        if (!subject) {
            alert("Preencha o campo assunto");
            isValid = false;
        }

        if (!message) {
            alert("Preencha o campo mensagem");
            isValid = false;
        }

        if (!isValid) {
            return; // Stop if any field is empty
        }

        // Send the form data using AJAX
        $.ajax({
            url: "https://formspree.io/f/xjkgoodp", // Your Formspree endpoint
            method: "POST",
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            },
            dataType: "json",
            success: function (response) {
                alert("Mensagem enviada com sucesso!");
                $("#contact-form")[0].reset(); // Clear the form
            },
            error: function (xhr, status, error) {
                console.error("Erro ao enviar o formulário:", error);
                alert("Ocorreu um erro. Tente novamente mais tarde.");
            }
        });
    });
});
