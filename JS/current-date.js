const now = new Date();
const dayOfWeek = now.toLocaleDateString("en-US",{weekday: "short"});
const formattedDate = now.toLocaleDateString("en-US",{
    month:"short",
    day: "numeric",
    year: "numeric"
})
const currentDateContainer = document.getElementById("current-date");
currentDateContainer.innerHTML = `
<p>${dayOfWeek},</p>
<p class="text-2xl font-bold">${formattedDate}</p>
`