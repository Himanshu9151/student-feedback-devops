const form = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const feedback = document.getElementById("feedback").value;

    const card = document.createElement("div");

    card.className = "feedback-card";

    card.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
    `;

    feedbackList.appendChild(card);

    form.reset();
});
