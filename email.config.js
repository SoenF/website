/*
 * Email Configuration for Contact Form
 * Your EmailJS credentials have been configured:
 * - Public Key: XucASaJKpPvwkjb7i
 * - Service ID: service_hfqq2h9
 * - Template ID: template_gv4bgid
 */

const emailConfig = {
  publicKey: "XucASaJKpPvwkjb7i", // Your EmailJS public key
  serviceId: "service_hfqq2h9", // Your custom service ID
  templateId: "template_gv4bgid", // Your EmailJS template ID
};

// Initialize EmailJS with your credentials
(function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init(emailConfig.publicKey);
  } else {
    console.error(
      "EmailJS library not loaded. Please check that the EmailJS CDN script is properly included.",
    );
  }
})();

// Function to send email using EmailJS
function sendContactEmail(formData) {
  return new Promise((resolve, reject) => {
    if (
      !formData ||
      !formData.to_email ||
      !formData.from_email ||
      !formData.message
    ) {
      reject(new Error("Missing required fields"));
      return;
    }

    emailjs.send(emailConfig.serviceId, emailConfig.templateId, formData).then(
      function (response) {
        console.log("Email sent successfully:", response);
        resolve(response);
      },
      function (error) {
        console.error("Email sending failed:", error);
        reject(error);
      },
    );
  });
}

// Export the function if using modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = { sendContactEmail, emailConfig };
}
