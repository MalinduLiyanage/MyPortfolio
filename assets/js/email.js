function sendEmail() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        alert("Please fill out all required fields.");
        return; 
    }

    var mailtoLink = "mailto:malindumadhubashana@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
        window.location.href = mailtoLink;
}