document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        (function () {
            emailjs.init("uOecHPx-Jf-lxNENK");
        })();

        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

        let alertMsg = document.getElementById("alertmsg")
        if (params.name === "") {
            alertMsg.textContent = "Empty field";
        } else {
            emailjs.send("service_39poixo", "template_t36pmot", params).then(
                function (res) {
                    alertMsg.style.color = "green";
                    alertMsg.textContent = "Email sent successfully!";
                    console.log("Email sent successfully!",res)
                    setTimeout(function () {
                        alertMsg.textContent = "";
                    }, 5000);
                    setTimeout(function () {
                        modal.style.display = "none";
                    }, 6000)

                },
                function (error) {
                    alertMsg.style.color = "red";
                    alertMsg.textContent = "Email send failed Please try again.";
                    setTimeout(function () {
                        alertMsg.textContent = "";
                    }, 5000);
                    console.error("Email send failed:", error);
                    setTimeout(() => {
                        modal.style.display = "none";
                    }, 6000)
                }
            );
        }

        form.reset(); 
    });
});