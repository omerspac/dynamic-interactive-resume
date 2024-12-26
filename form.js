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

let workIndex = 1;
let educationIndex = 1;

document.getElementById('addWorkExperience').addEventListener('click', () => {
    const workSection = document.getElementById('workExperienceSection');
    const newWorkEntry = document.createElement('div');
    newWorkEntry.id = `workExperience${workIndex}`;
    newWorkEntry.classList.add('work-entry');
    
    newWorkEntry.innerHTML = `
        <hr /><br>
        <label for="workTitle${workIndex}" class="form-titles">Work Title:</label><br>
        <input type="text" id="workTitle${workIndex}" name="workTitle${workIndex}" class="form-textbox" placeholder="e.g., Graphics Designer" required><br><br>

        <label for="workPlace${workIndex}" class="form-titles">Workplace:</label><br>
        <input type="text" id="workPlace${workIndex}" name="workPlace${workIndex}" class="form-textbox" placeholder="e.g., Freelance/Projects" required><br><br>

        <label for="workDate${workIndex}" class="form-titles">Work Date:</label><br>
        <input type="text" id="workDate${workIndex}" name="workDate${workIndex}" class="form-textbox" placeholder="e.g., Aug 2022 - Present" required><br><br>

        <label for="workDescription${workIndex}" class="form-titles">Work Description:</label><br>
        <textarea id="workDescription${workIndex}" name="workDescription${workIndex}" placeholder="Describe your responsibilities and achievements" class="work-description" required></textarea><br><br>
    `;
    workSection.insertBefore(newWorkEntry, document.getElementById('addWorkExperience'));
    workIndex++;
});

document.getElementById('addEducation').addEventListener('click', () => {
    const educationSection = document.getElementById('educationSection');
    const newEducationEntry = document.createElement('div');
    newEducationEntry.id = `education${educationIndex}`;
    newEducationEntry.classList.add('education-entry');

    newEducationEntry.innerHTML = `
        <hr /><br>
        <label for="degree${educationIndex}" class="form-titles">Degree/Major:</label><br>
        <input type="text" id="degree${educationIndex}" name="degree${educationIndex}" class="form-textbox" placeholder="e.g., Bachelors" required><br><br>

        <label for="university${educationIndex}" class="form-titles">Education Place:</label><br>
        <input type="text" id="university${educationIndex}" name="university${educationIndex}" class="form-textbox" placeholder="e.g., XYZ University" required><br><br>

        <label for="educationDate${educationIndex}" class="form-titles">Start Date - End Date:</label><br>
        <input type="text" id="educationDate${educationIndex}" name="educationDate${educationIndex}" class="form-textbox" placeholder="e.g., Sep 2024 - Sep 2028 (In progress)" required><br><br>
    `;
    educationSection.insertBefore(newEducationEntry, document.getElementById('addEducation'));
    educationIndex++;
});
