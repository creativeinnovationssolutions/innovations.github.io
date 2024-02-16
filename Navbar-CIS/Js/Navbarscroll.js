var lastScrollTop = 0;

window.onscroll = function () {
    var scrollPosition = window.scrollY;
    var navbar1 = document.getElementById("navbar1");
    var navbar2 = document.getElementById("navbar2");

    if (scrollPosition > lastScrollTop) {
        // Scrolling down
        navbar1.style.top = "-10px";
        navbar2.style.top = "0";
        navbar2.classList.remove("sticky");
    } else if (scrollPosition < 5) {
        // Scrolling up to the top
        navbar1.style.top = "0";
        navbar2.style.top = "30px"; 
        navbar2.classList.add("sticky");
    }

    lastScrollTop = scrollPosition;
};




let burgermenu = document.getElementById("side-nav")
let hemburgerbutton = document.getElementsByClassName("btn-primary")[0];
burgermenu.style.display = "none"
hemburgerbutton.addEventListener("click", () => {
    burgermenu.style.display = "block"
})
function handleCloseMenu() {
    burgermenu.style.display = "none"
}
let accordion = document.querySelector(".accordion-text");
let accordion2 = document.querySelector(".accordion-text2");
let accordion3 = document.querySelector(".accordion-text3");
accordion.style.display = "none";
accordion2.style.display = "none";
accordion3.style.display = "none";
function handleAccordion() {
    if (accordion.style.display === "none" || accordion.style.display === "") {
        accordion.style.display = "block";
    } else {
        accordion.style.display = "none";
    }
}
function handleAccordion2() {
    if (accordion2.style.display === "none" || accordion2.style.display === "") {
        accordion2.style.display = "block";
    } else {
        accordion2.style.display = "none";
    }
}
function handleAccordion3() {
    if (accordion3.style.display === "none" || accordion3.style.display === "") {
        accordion3.style.display = "block";
    } else {
        accordion3.style.display = "none";
    }
}
// ------------------------------------- Modal ===============================================
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
const modalBtn = () => {
    modal.style.display = "block";
}

const closebtn = () => {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// -----------------------------------------modal form -----------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quoteForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Initialize EmailJS
        emailjs.init("XUf434B2EfA-juULF");

        const getValue = (id) => document.getElementById(id).value;

        const name = getValue("first");
        const lastName = getValue("last");
        const email = getValue("email");
        const phoneNumber = getValue("number");
        const company = getValue("company");
        const website = getValue("website");

        // Get checked services
        const services = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.nextElementSibling.textContent);

        const message = getValue("message");

        const params = {
            name, lastName, email, phoneNumber, company, website, services, message
        }

        let alertMsg = document.getElementById("alertmsg")
        if (params === "") {
            alertMsg.textContent = "Empty field";
        } else {
            // Send email asynchronously
            emailjs.send("service_8ki8urq", "template_fcdm65l", params).then(
                function (res) {
                    alertMsg.style.color = "green";
                    alertMsg.textContent = "Email sent successfully!";
                    console.log("Email sent successfully!", res)
                    setTimeout(function () {
                        alertMsg.textContent = "";
                    }, 5000);
                    setTimeout(function () {
                        modal.style.display = "none";
                    }, 6000)
                },
                function (error) {
                    alertMsg.style.color = "red";
                    alertMsg.textContent = "Email send failed. Please try again.";
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

        console.log(params);
        form.reset();
    })
});

// --------------------------------------------- Handle Routing -----------------------------------------------------

function handleHome(){
    window.location.href = "/"
}
function handleSolution(){
    window.location.href = "../../Solutions-CIS/Solutions.html"
}

function handleAbout(){
    window.location.href = "/About-us-CIS/About.html"
}
function handleFaqs(){
    window.location.href = "/About-us-CIS/Faqs-CIS/Faqs.html"
}
function handleTestimonials(){
    window.location.href = "/About-us-CIS/Testimonials-CIS/Testimonial.html"
}
function handleBlog(){
    window.location.href = "/Blog-CIS/Blog.html"
}
function handlePortfolio(){
window.location.href = "/Portfolio-CIS/Portfolio.html";
}
function handleContact(){
    window.location.href = "/Contact-CIS/Contact.html"
}
function handleRequestQuote(){
    // alert('s')
    window.location.href = "/Contact-CIS/Request-Quote-CIS/Request-Quote.html"
}