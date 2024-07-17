document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { title: 'Chat-bot', description: 'This is the description for project one.' },
        { title: 'BankApplication', description: 'This is the description for project two.' },
        { title: 'TicTacToe', description: 'This is the description for project three.' },
    ];

    const projectList = document.querySelector('.project-list');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);

        projectList.appendChild(projectDiv);
    });

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent! Thank you for contacting me.');
        this.reset();
    });
});
