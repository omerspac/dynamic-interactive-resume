document.getElementById('resumeForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const resumeData = {};
    formData.forEach((value, key) => {
        resumeData[key] = value;
    });

    localStorage.setItem('resumeData', JSON.stringify(resumeData));

    window.location.href = 'resume.html';
});
