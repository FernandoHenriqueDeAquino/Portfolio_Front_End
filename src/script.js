$(document).ready(() => {
    $(".nav-toggle").on("click", () => {
        $("#nav-bar ul").slideToggle("medium");
    });

    // Corrected the selector to target an ID
    $("#contact-form").on("submit", function (event) {
        event.preventDefault(); // Prevent the form from reloading the page

        // Validate each field properly using IDs with #
        if (!$("#name").val()) {
            alert("Preencha o campo nome");
        }

        if (!$("#email").val()) {
            alert("Preencha o campo email");
        }

        if (!$("#subject").val()) {
            alert("Preencha o campo assunto");
        }

        if (!$("#message").val()) {
            alert("Preencha o campo mensagem");
        }

        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        };

        console.log(formData); // Log form data to the console

  
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    console.log("Form submitted!");
  })


        /*
        $ajax({
            type: "POST",
            url: "contact.php",
            data: formData,
            success: function (response) {
                // Handle success response
                console.log("Form submitted successfully.");
            },
            error: function (xhr, status, error) {
                // Handle error response
                console.error("Error submitting form: " + error);
            }
        })
        */
    });
});
