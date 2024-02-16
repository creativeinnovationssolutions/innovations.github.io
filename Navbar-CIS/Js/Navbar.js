let navbar_js = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="./images/favicon.png">
    <title>Home &#8211; CIS</title>
    
</head>
<link rel="stylesheet" type="text/css" href="your_website_domain/css_root/flaticon.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<link rel="stylesheet" href="./css/Product.css">


<body>
    <!-- --------------------------------------------------------- Navbar1 ----------------------------------------------------------------------------------------- -->
    <div id="navbar1">
        <div id="nav1">
            <a href="tel:+917260989506">
                <p><span>Phone:</span> +91 726-098-9506</p>
            </a>
            <a href="mailto:solutionscreativeinnovations@gmail.com">
                <p><span>Email:</span> solutionscreativeinnovations@gmail.com</p>
            </a>
        </div>
        <div id="nav2">
            <p><a href="https://www.facebook.com/CISgroup"><i class="fa-brands fa-facebook-f social-icon"
                        target="_blank"></i></a></p>
            <p><a href="https://twitter.com/CIS1" target="_blank"><i
                        class="fa-brands fa-twitter social-icon"></i></a></p>
            <p><a href="https://www.linkedin.com/company/CIS" target="_blank"><i
                        class="fa-brands fa-linkedin-in social-icon"></i></a></p>
          
            <p><a href="https://www.instagram.com/CISgroup/" target="_blank"><i
                        class="fa-brands fa-instagram social-icon" target="_blank"></i></a></p>
        </div>
    </div>
    <div id="nav-border"></div>

    <!-- ----------------------------------------------------------- Navbar2 ------------------------------------------------------------------- -->
    <div id="navbar2">
        <div id="second-nav1">
            <img img fetchpriority="high" width="140"
                src="/Navbar-CIS/assets/creative_innovations2.png"
                class="attachment-full size-full wp-image-1249" alt="revenue rushy logo"
                sizes="(max-width: 1080px) 100vw, 1080px">
        </div>
        <div id="second-nav2">
            <div class="nav-text" onclick="handleHome()">
                <p>Home</p>
            </div>

            <div class="text-with-icon" onclick="handleSolution()">

                <div class="text-with-icon-aboutus">
                    <p>Solutions </p>
                    <i aria-hidden="true" class="fa fa-angle-down solutions-icon"></i>
                </div>

                <div id="drop-down3">
                    <div class="drop-down3-items">
                        <div class="drop-down3-items-child1">
                            <div class="drop-down3-items-subchild">
                                <h1>Digital</h1>
                                <h1>Consulting</h1>
                            </div>
                            <div class="drop-down3-items-subchild-ptags">
                                <div>                   
                                    <a href="/Solutions-CIS/Digital_Consulting/Cloud_&_Devops">
                                        <p>Cloud & Devops</p>
                                    </a>
                                    <a href="/Solutions-CIS/Digital_Consulting/Identity_&_Access_Management/">
                                        <p>Identity and Access Management</p>
                                    </a>
                                    <a href="/Solutions-CIS/Digital_Consulting/Cyber_security/">
                                        <p>Cyber Security</p>
                                    </a>
                                    <a href="/Solutions-CIS/Digital_Consulting/Data_science/">
                                        <p>Data Science</p>
                                    </a>
                                    <a href="/Solutions-CIS/Digital_Consulting/SAP/">
                                        <p>SAP</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="/Solutions-CIS/Digital_Consulting/Salesforce">
                                        <p>Salesforce</p>
                                    </a>
                                    <a href="/Solutions-CIS/Digital_Consulting/Robotic_Process_Automation">
                                        <p>Robotic Process Automation</p>
                                    </a>
                                    <a href="/Solutions-CIS/Digital_Consulting/Web_Development">
                                        <p>Web/Mobile Devlopment</p>
                                    </a>
                                    <a href="/Solutions-CIS/Digital_Consulting/API">
                                        <p>Api</p>
                                    </a>
                                    <a href="/Solutions-CIS/Digital_Consulting/Process_Circut_Board">
                                        <p>Printed Circuit Board</p>
                                    </a>
                              
                                </div>

                            </div>
                        </div>
                       
                        <div class="drop-down3-items-child3">
                            <div class="drop-down3-items-subchild">
                                <h1>
                                    Digital
                                </h1>
                                <h1>
                                    Experience
                                </h1>
                            </div>
                            <div class="drop-down3-items-subchild-ptags">
                          
                                    <a href="">
                                        <p>User Interface/User Experience</p>
                                    </a>
                                    <a href="">
                                        <p>Augmented Reality/Virtual Reality</p>
                                    </a>
                                    <a href="">
                                        <p>Gaming</p>
                                    </a>
                                    <a href="">
                                        <p>Animation</p>
                                    </a>
                                    <a href="">
                                        <p>Videos</p>
                                    </a>
                              
                                <a href="">
                                    <p>Search engine Optimization</p>
                                </a>
                                <a href="">
                                    <p>Social Media Marketing</p>
                                </a>
                                <a href="">
                                    <p>Pay Per Click</p>
                                </a>
                                <a href="">
                                    <p>Email Marketing</p>
                                </a>
                                <a href="">
                                <p>Marketing Automation</p>
                            </a>

                            </div>
                        </div>
                        <div class="drop-down3-items-child4">
                            <img src="http://192.168.43.6:5503/Home-CIS/assets/DeepInDigital-Menu-Banner.webp"
                                alt="alt">
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-with-icon">

                <div class="text-with-icon-aboutus" onclick="handleAbout()">
                    <p>About Us </p>
                    <i aria-hidden="true" class="fa fa-angle-down solutions-icon"></i>
                </div>

                <div id="drop-down">
                    <div onclick="handleFaqs()">
                        <p>FAQ'S</p>
                    </div>
                    <div onclick="handleTestimonials()">
                        <p>Testimonials</p>
                    </div>
                </div>
            </div>
            <div class="nav-text" onclick="handlePortfolio()">
                <p>Portfolio</p>
            </div>
            <div class="nav-text" onclick="handleBlog()">
                <p>Blog</p>
            </div>
            <div class="text-with-icon">

                <div class="text-with-icon-aboutus" onclick="handleContact()">
                    <p>Contact</p>
                    <i aria-hidden="true" class="fa fa-angle-down solutions-icon"></i>
                </div>

                <div id="drop-down2" onclick="handleRequestQuote()">
                    <p>Request Quote</p>
                </div>
            </div>
        </div>
        <div id="second-nav3">
            <button class="free-quote-button" onclick="modalBtn()">Free Quote</button>
            <span data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" class="btn btn-primary"
                aria-controls="#sidenav-1" aria-haspopup="true">
                <i class="fas fa-bars burger-icon"></i>
            </span>
        </div>
    </div>
    <!------------------- -------------------------------- Modal ------------------------------------------------------------------------------ -->
    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <h5 style="color: white;">Contact Us</h5>
                <span class="close" onclick="closebtn()">&times;</span>
            </div>
            <div class="modal-body">
                <div class="alertmsg"></div>
                <form action="" class="modal-form" id="quoteForm">
                <div class="modal-form-box">
                    <div class="modal-form-box-input">
                        <label for="">First Name *</label>
                        <input type="text" id="first" placeholder="First Name" required>
                    </div>
                    <div class="modal-form-box-input">
                        <label for="">Last Name</label>
                        <input type="text" id="last" placeholder="Last Name">
                    </div>
                </div>
                <div class="modal-form-box">
                    <div class="modal-form-box-input">
                        <label for="">Email Address *</label>
                        <input type="email" id="email" placeholder="Email" required>
                    </div>
                    <div class="modal-form-box-input">
                        <label for="">Phone Number *</label>
                        <input type="number" id="number" placeholder="Number" required>
                    </div>
                </div>
                <div class="modal-form-box">
                    <div class="modal-form-box-input">
                        <label for="">Company/Organization *</label>
                        <input type="text" id="company" placeholder="Company Name" required>
                    </div>
                    <div class="modal-form-box-input">
                        <label for="">Website *</label>
                        <input type="text" id="website" placeholder="https://www.envato.com" required>
                    </div>
                </div>
                <div class="modal-text-checkbox">
                    <p class="section-2-services">What Services Can We Provide You? *</p>
                    <div class="modal-checkbox">
                        <div class="modal-form-box-1-2">
                            <input type="checkbox" id="seo">
                            <p>Optimization (SEO)</p>
                        </div>
                        <div class="modal-form-box-1-2">
                            <input type="checkbox" id="webdesign">
                            <p>Web Design</p>
                        </div>
                        <div class="modal-form-box-1-2">
                            <input type="checkbox" id="webhosting">
                            <p>Web Hosting</p>
                        </div>
                        <div class="modal-form-box-1-2">
                            <input type="checkbox" id="maintainance">
                            <p>Maintainance</p>
                        </div>
                    </div>
                </div>
                <div class="modal-message-box">
                    <label for="">Message *</label>
                    <textarea name="" id="message" cols="10" rows="3" placeholder="Type Message Here..." !important></textarea>
                </div>
                <div class="modal-form-button">
                    <button>SUBMIT <i class="fa-solid fa-angles-right"></i></button>
                    <div id="alertmsg"></div>
                </div>
            </form>
            </div>

        </div>

    </div>
    <!-- -----------------------------------------------------------Modal end------------------------------------------------------------- -->
    <!-- ----------------------------------------------- Hemburger Menu-------------------------------------------- -->

    <div id="side-nav">
        <div class="side-nav1">
            <a href=""><img src="http://192.168.43.6:5503/Navbar-CIS/assets/CIS-logo.png" alt=""></a>
            <button onclick="handleCloseMenu()"><i class="fa-solid fa-xmark close-menu-icon"></i></button>
        </div>
        <div class="side-nav2">
            <a href="">
                <p class="side-nav2-sub-child">Home</p>
            </a>

            <div class="side-nav2-solutions-with-icon">
                <a href="">
                    <p>Solutions</p>
                </a>
                <p onclick="handleAccordion3()"><i aria-hidden="true" class="fa fa-angle-down solutions-icon-sidenav"></i></p>
            </div>
            <div class="accordion-text3">
                <div class="drop-down3-items-child1 side-nav-accordion-1">
                    <div class="drop-down3-items-subchild">
                        <h1>Digital</h1>
                        <h1>Technologies</h1>
                    </div>
                    <div class="drop-down3-items-subchild-ptags">
                        <a href="">
                            <p>Cloud &amp; DevOps</p>
                        </a>
                        <a href="">
                            <p>Application Modernisation</p>
                        </a>
                        <a href="">
                            <p>CRM</p>
                        </a>
                        <a href="">
                            <p>Ai &amp; Cognitive Sciences</p>
                        </a>
                        <a href="">
                            <p>Product Engineering</p>
                        </a>
                        <a href="">
                            <p>Data &amp; Analytics</p>
                        </a>
                        <a href="">
                            <p>Digital Assurance</p>
                        </a>
                        <a href="">
                            <p>Digital Content Management</p>
                        </a>
                        <a href="">
                            <p>Professional Services</p>
                        </a>
                    </div>
                </div>
                <div class="drop-down3-items-child2 side-nav-accordion-1">
                    <div class="drop-down3-items-subchild">
                        <h1>Digital</h1>
                        <h1>Operations</h1>
                    </div>
                    <div class="drop-down3-items-subchild-ptags">
                        <a href="">
                            <p>Finance &amp; Accounting</p>
                        </a>
                        <a href="">
                            <p>Banking Process Management</p>
                        </a>
                        <a href="">
                            <p>Insurance Process Management</p>
                        </a>
                        <a href="">
                            <p>HealthCare Process Management</p>
                        </a>
                        <a href="">
                            <p>Intelligent Automation</p>
                        </a>
                    </div>
                </div>
                <div class="drop-down3-items-child3 side-nav-accordion-1">
                    <div class="drop-down3-items-subchild">
                        <h1>
                            Digital
                        </h1>
                        <h1>
                            Experiences
                        </h1>
                    </div>
                    <div class="drop-down3-items-subchild-ptags">
                        <a href="">
                            <p>Customer Management &amp; Experiences</p>
                        </a>
                        <a href="">
                            <p>Consumer Research &amp; Analytics</p>
                        </a>
                        <a href="">
                            <p>Digital Proctoring</p>
                        </a>
                    </div>
                </div>
                <div class="drop-down3-items-child4 side-nav-accordion-1">
                    <img src="http://192.168.43.6:5503/Home-CIS/assets/DeepInDigital-Menu-Banner.webp" alt="alt">
                </div>
            </div>


            <div class="side-nav2-solutions-with-icon">
                <a href="">
                    <p>About Us</p>
                </a>
                <p onclick="handleAccordion2()"><i aria-hidden="true"
                        class="fa fa-angle-down solutions-icon-sidenav"></i></p>
            </div>
            <div class="accordion-text2">
                <a href="">
                    <p>FAQ'S</p>
                </a>
                <a href="">
                    <p>Testimonials</p>
                </a>
            </div>

            <a href="">
                <p class="side-nav2-sub-child">Blog</p>
            </a>

            <div class="side-nav2-solutions-with-icon">
                <a href="">
                    <p>Contact</p>
                </a>
                <p onclick="handleAccordion()"><i aria-hidden="true"
                        class="fa fa-angle-down solutions-icon-sidenav"></i></p>

            </div>
            <!-- ---------------------------------- Accordion--------------------------------------------- -->
            <div class="accordion-text">
                <a href="">
                    <p>Request Quote</p>
                </a>
            </div>
        </div>
    </div>


</body>

</html>
<script type="text/javascript" src="../../Contact-CIS/Request-Quote-CIS/JS/RequestQuote.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script src="./Navbar-CIS/Js/Navbarscroll.js"></script>`;



let navbar = document.querySelector("nav");
navbar.innerHTML = navbar_js;

let navbarScript = document.createElement('script');
navbarScript.src = "./Navbar-CIS/Js/Navbarscroll.js";
document.head.appendChild(navbarScript);

let navbarScript2 = document.createElement('script');
navbarScript2.src = "../../Contact-CIS/Request-Quote-CIS/JS/RequestQuote.js";
document.head.appendChild(navbarScript2);

let navbarScript3 = document.createElement('script');
navbarScript3.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
document.head.appendChild(navbarScript3);