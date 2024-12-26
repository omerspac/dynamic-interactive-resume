document.addEventListener('DOMContentLoaded', () => {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));
    const resumeContent = document.getElementById('resumeContent');

    if (resumeData) {
        resumeContent.innerHTML = `
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            </head>
            <p class="resume-name"><strong>${resumeData.fullName}</strong></p>
            <p class="resume-job-title"><strong>${resumeData.jobTitle}</strong></p>
            <br>

            <header>
                <hr>
                <p class="titles" align="center"><b>PERSONAL INFORMATION</b></p>
                <hr>
            </header>

            <section>
                <p class="resume-work-content">${resumeData.personalInfo}</p>
            </section>

            <header>
                <hr>
                <p class="titles" align="center"><b>WORK EXPERIENCE</b></p>
                <hr>
            </header>

            <section>
                <p class="work-titles"><i class="fas fa-arrow-right"></i> ${resumeData.workTitle}</p>
                <p class="work-wheres">${resumeData.workPlace}</p>
                <p class="work-time">${resumeData.workDate}</p>

                <p class="work-content">${resumeData.workDescription}</p>
            </section><br>

            <header>
                <hr>
                <p class="titles" align="center"><b>ACADEMICS & EDUCATION</b></p>
                <hr>
            </header>

            <section>
                <p class="work-titles"><i class="fas fa-arrow-right"></i> ${resumeData.degree}</p>
                <p class="work-wheres">${resumeData.university}</p>
                <p class="work-time">${resumeData.educationDate}</p>
            </section>

            <header>
                <hr>
                <p class="titles" align="center"><b>KNOWLEDGE & SKILLS</b></p>
                <hr>
            </header>

            <section>
                <p class="resume-work-content">${resumeData.skills}</p>
            </section>

            <header>
                <hr>
                <p class="titles" align="center"><b>SOCIAL CONTACTS</b></p>
                <hr>
            </header>

            <section>
                <ul class="social-contact">
                    <li class="social-contact-content" align="center">${resumeData.email}</li>
                    <li class="social-contact-content" align="center">${resumeData.phone}</li>
                    <li class="social-contact-content" align="center">${resumeData.address}</li>
                    <div class="social-icons">
                        <a href="${resumeData.github}" target="_blank"><img src="images/logos/github_logo.png" class="icon1"></a>
                        <a href="${resumeData.linkedin}" target="_blank"><img src="images/logos/linkedin_logo.png" class="icon2"></a>
                    </div>
                </ul>
            </section>
        `;

    } else {
        resumeContent.innerHTML = `<p class="resume-empty-message">No data available. Please go back and fill the form.</p>`;
    }
});
