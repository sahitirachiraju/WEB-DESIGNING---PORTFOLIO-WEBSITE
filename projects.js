function showProjectDetails(name, description, imageSrc, liveDemoLink) {
    const modal = document.getElementById("project-details-modal");
    const projectName = document.getElementById("project-name");
    const projectDescription = document.getElementById("project-description");
    const projectImage = document.getElementById("project-image");

    projectName.textContent = name;
    projectDescription.textContent = description;
    projectImage.src = imageSrc;
    modal.style.display = "block";
}
function closeProjectDetailsModal() {
    const modal = document.getElementById("project-details-modal");
    modal.style.display = "none";
}
