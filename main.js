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
let current_command = "";
let current_output_id = "";

function run_command(command) {
    current_command = command;
    current_output_id = command + "_output";
    clear_command();
    type_command(command);
}

function clear_command() {
    document.getElementById("typed_command").textContent = "";
    document
        .querySelectorAll(".output")
        .forEach((output) => (output.style.display = "none"));
}

function type_command(command) {
    let index = 0;
    const command_text = command;
    const interval = setInterval(() => {
        document.getElementById("typed_command").textContent +=
            command_text[index];
        index++;
        if (index === command_text.length) {
            clearInterval(interval);
            document.getElementById(current_output_id).style.display = "block";
        }
    }, 50);
}

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
