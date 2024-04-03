const job_titles = [
    "System Level Programmer",
    "Fullstack Developer",
	"Linux Enthusiast",
	"Developer Workflow Optimizer",
];
const header = document.getElementById("job_title");
let index = 0;

function cycle_job_titles() {
    header.textContent = job_titles[index];
    index = (index + 1) % job_titles.length;
}

setInterval(cycle_job_titles, 3000);
