function sendEmail() {
  let parms = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_1yl761q", "template_yyb9pal", parms)
    .then(alert("Message sent successfully!"), function (error) {
      alert("Failed to send message, please try again later.");
    });
}