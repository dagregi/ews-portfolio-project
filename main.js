const job_titles = [
    "System Level Programmer",
    "Fullstack Developer",
    "Linux Enthusiast",
    "Developer Workflow Optimizer",
];
const header = document.getElementById("job_title");
let index = 0;
let char_index = 0;
let is_deleting = false;

function char_delete() {
    const current_text = job_titles[index];
    if (!is_deleting) {
        header.textContent = current_text.substring(0, char_index + 1);
        char_index++;
    } else {
        header.textContent = current_text.substring(0, char_index - 1);
        char_index--;
    }

    if (!is_deleting && char_index === current_text.length) {
        is_deleting = true;
        setTimeout(char_delete, 500);
    } else if (is_deleting && char_index === 1) {
        is_deleting = false;
        index = (index + 1) % job_titles.length;
        setTimeout(char_delete, 150);
    } else {
        setTimeout(char_delete, 50);
    }
}

char_delete();
