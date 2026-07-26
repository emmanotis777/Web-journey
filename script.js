const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click",function() {
    document.body.classList.toggle("light-mode");
});
const form = document.querySelector("form");
const formMessage = document.getElementById("form-message");
form.addEventListener("submit", function(event) {event.preventDefault();
    const name = document.getElementById("name"). value;
    const email = document.getElementById("email"). value;
    if (name.trim() === "" ||
email.trim() === "") {
    formMessage.textContent = "Please fill in both your name and email.";
    formMessage.style.color = "red";
} else {
    formMessage.textContent = 
    "Thanks, " + name + "! Your message has been received.";
    formMessage.style.color = "green";
    form.reset();
}
});