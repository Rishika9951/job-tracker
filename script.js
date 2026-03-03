const form = document.getElementById("jobForm");
const jobList = document.getElementById("jobList");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function renderJobs() {
    jobList.innerHTML = "";

    jobs.forEach((job, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${job.company} - ${job.role} (${job.status})
            <button class="delete-btn" onclick="deleteJob(${index})">Delete</button>
        `;

        jobList.appendChild(li);
    });
}

function deleteJob(index) {
    jobs.splice(index, 1);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    renderJobs();
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;
    const status = document.getElementById("status").value;

    jobs.push({ company, role, status });

    localStorage.setItem("jobs", JSON.stringify(jobs));

    form.reset();
    renderJobs();
});

renderJobs();