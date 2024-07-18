function showProjectDetails(projectId) {
    let title, description;

    if (projectId === 'project1') {
        title = 'Project 1';
        description = 'Detailed description of Project 1.';
    } else if (projectId === 'project2') {
        title = 'Project 2';
        description = 'Detailed description of Project 2.';
    }

    document.getElementById('project-title').textContent = title;
    document.getElementById('project-description').textContent = description;

    document.getElementById('project-details').style.display = 'block';
}

function closeProjectDetails() {
    document.getElementById('project-details').style.display = 'none';
}
