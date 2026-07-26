const projects =[
    {
        title: "Personal Bio Site",
        description: "My first website - built from scratch to learn HTML, CSS, and flexbox layout.",
    link:
"https://github.com/emmanotis777/web-journey"
},
{
    title: "To-Do List",
    description: "My first website - rebuild a site faster with less hand holding.",
    link:
    "https://github.com/emmanotis777/web-journey"
}
]; 
const projectsContainer = document.getElementById("projects-container");
projects.forEach(function(project) 
{
    const projectElement = document.createElement("div");
    projectElement.className = "project-card";
    projectElement.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project on Github</a>`;
    projectsContainer.appendChild(projectElement)
});
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