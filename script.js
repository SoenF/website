/*
 * AZUROPS Website - JavaScript
 * Handles mobile navigation, smooth scrolling, and contact form
 */

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for fixed navbar
          behavior: "smooth",
        });
      }
    });
  });

  // Add scroll event listener for navbar effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(10, 10, 10, 0.98)";
    } else {
      navbar.style.backgroundColor = "rgba(10, 10, 10, 0.95)";
    }
  });

  // Contact form submission
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value || "Not provided";
      const message = document.getElementById("message").value;

      // Show loading message
      formMessage.className = "form-message";
      formMessage.textContent = "Sending your message...";
      formMessage.style.display = "block";

      // Prepare parameters for EmailJS matching your template structure
      const templateParams = {
        to_email: "flochlay15@gmail.com", // The email address to send to
        name: name, // Client's name
        message: `Email: ${email}\nPhone: ${phone}\n\n${message}`, // Include email and phone in message
        time: new Date().toLocaleString(), // Timestamp for your template
        from_email: email, // Client's email
        phone: phone, // Client's phone number
        reply_to: email, // Reply-to address
        email_subject: `New Contact from ${name}`, // Subject for the email
        client_email: email, // For clear identification in email
        client_phone: phone, // For clear identification in email
      };

      // Send email using EmailJS with your configured credentials
      if (
        typeof emailjs !== "undefined" &&
        typeof emailConfig !== "undefined"
      ) {
        emailjs
          .send(emailConfig.serviceId, emailConfig.templateId, templateParams)
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              // Show success message
              formMessage.className = "form-message success";
              formMessage.textContent =
                "Thank you! Your message has been sent successfully.";

              // Reset the form
              contactForm.reset();

              // Hide the message after 5 seconds
              setTimeout(() => {
                formMessage.style.display = "none";
              }, 5000);
            },
            function (error) {
              console.log("FAILED...", error);
              // Show error message
              formMessage.className = "form-message error";
              formMessage.textContent =
                "Sorry, there was an error sending your message. Please try again.";

              // Hide the message after 5 seconds
              setTimeout(() => {
                formMessage.style.display = "none";
              }, 5000);
            },
          );
      } else {
        // Fallback if EmailJS is not loaded
        formMessage.className = "form-message error";
        formMessage.textContent =
          "EmailJS library not loaded. Please ensure the CDN script and config are included.";
      }
    });
  }
});
