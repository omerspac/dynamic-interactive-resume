"use strict";
const toggleButton = document.getElementById('toggleWorkLinks');
const workLinks = document.getElementById('workLinks');
const workWheres = document.getElementById('workWheres');
if (toggleButton && workLinks && workWheres) {
    toggleButton.addEventListener('click', () => {
        if (workLinks.style.display === 'none' || workLinks.style.display === '') {
            workLinks.style.display = 'block';
            workWheres.style.display = 'block';
            toggleButton.textContent = 'Hide Work Links';
        }
        else {
            workLinks.style.display = 'none';
            workWheres.style.display = 'none';
            toggleButton.textContent = 'Show Work Links';
        }
    });
}
const toggleSkills1 = document.getElementById('toggleSkills1');
const skillList1 = document.getElementById('skillList1');
if (toggleSkills1 && skillList1) {
    toggleSkills1.addEventListener('click', () => {
        if (skillList1.classList.contains('hidden')) {
            skillList1.classList.remove('hidden');
            toggleSkills1.textContent = 'Hide Skills';
        }
        else {
            skillList1.classList.add('hidden');
            toggleSkills1.textContent = 'Show Skills';
        }
    });
}
const toggleSkills2 = document.getElementById('toggleSkills2');
const skillList2 = document.getElementById('skillList2');
if (toggleSkills2 && skillList2) {
    toggleSkills2.addEventListener('click', () => {
        if (skillList2.classList.contains('hidden')) {
            skillList2.classList.remove('hidden');
            toggleSkills2.textContent = 'Hide Softwares Knowledge';
        }
        else {
            skillList2.classList.add('hidden');
            toggleSkills2.textContent = 'Show Softwares Knowledge';
        }
    });
}
