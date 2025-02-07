$("#contact-form").on("submit", function (event) {
    event.preventDefault();

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let subject = $("#subject").val().trim();
    let message = $("#message").val().trim();

    if (!name || !email || !subject || !message) {
        alert("Todos os campos são obrigatórios!");
        return;
    }

    let submitButton = $("input[type='submit']");
    submitButton.val("Enviando...").prop("disabled", true); // Disable button while sending

    $.ajax({
        url: "https://formspree.io/f/xjkgoodp",
        method: "POST",
        data: { name, email, subject, message },
        dataType: "json",
        success: function (response) {
            alert("Mensagem enviada com sucesso!");
            $("#contact-form")[0].reset();
        },
        error: function (xhr, status, error) {
            alert("Ocorreu um erro. Tente novamente.");
        },
        complete: function () {
            submitButton.val("Enviar").prop("disabled", false); // Re-enable button after response
        }
    });
});
