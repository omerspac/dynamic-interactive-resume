document.addEventListener('DOMContentLoaded', () => {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));
    const resumeContent = document.getElementById('resumeContent');

    if (resumeData) {
        resumeContent.innerHTML = `
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            </head>
            <br>
            <img src="${resumeData.pfpLink}" class="profile-pic">
            <p class="resume-name"><strong>${resumeData.fullName}</strong></p>
            <p class="resume-job-title">${resumeData.jobTitle}</p>
            <br>

            <header>
                <hr>
                <p class="titles" align="center"><b>PERSONAL INFORMATION</b></p>
                <hr>
            </header>

            <section>
                <p class="resume-work-content">${resumeData.personalInfo}</p>
            </section>
        `;

        if (resumeData.workTitle0) {
            resumeContent.innerHTML += `
                <header>
                    <hr>
                    <p class="titles" align="center"><b>WORK EXPERIENCE</b></p>
                    <hr>
                </header>
            `;
            let workExperienceHTML = '';
            let workIndex = 0;
            while (resumeData[`workTitle${workIndex}`]) {
                workExperienceHTML += `
                    <section>
                        <p class="work-titles"><i class="fas fa-arrow-right"></i> ${resumeData[`workTitle${workIndex}`]}</p>
                        <p class="work-wheres">${resumeData[`workPlace${workIndex}`]}</p>
                        <p class="work-time">${resumeData[`workDate${workIndex}`]}</p>
                        <p class="work-content">${resumeData[`workDescription${workIndex}`]}</p>
                    </section><br><hr>
                `;
                workIndex++;
            }
            resumeContent.innerHTML += workExperienceHTML;
        }

        if (resumeData.degree0) {
            resumeContent.innerHTML += `
                <header>
                    <p class="titles" align="center"><b>ACADEMICS & EDUCATION</b></p>
                    <hr>
                </header>
            `;
            let educationHTML = '';
            let educationIndex = 0;
            while (resumeData[`degree${educationIndex}`]) {
                educationHTML += `
                    <section>
                        <p class="work-titles"><i class="fas fa-arrow-right"></i> ${resumeData[`degree${educationIndex}`]}</p>
                        <p class="work-wheres">${resumeData[`university${educationIndex}`]}</p>
                        <p class="work-time">${resumeData[`educationDate${educationIndex}`]}</p>
                    </section><br><hr>
                `;
                educationIndex++;
            }
            resumeContent.innerHTML += educationHTML;
        }

        resumeContent.innerHTML += `
            <header>
                <p class="titles" align="center"><b>KNOWLEDGE & SKILLS</b></p>
                <hr>
            </header>

            <section>
                <p class="resume-work-content">${resumeData.skills}</p>
            </section>
        `;

        resumeContent.innerHTML += `
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

document.addEventListener('DOMContentLoaded', () => {
    const generateResumeButton = document.getElementById('generateResumeButton');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            generateResumeButton.style.display = 'block';
        } else {
            generateResumeButton.style.display = 'none';
        }
    });
});
