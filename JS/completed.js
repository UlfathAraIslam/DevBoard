const completeBtns = document.querySelectorAll(".complete-btn");
for(const completeBtn of completeBtns){
    completeBtn.addEventListener("click",function(event){
        alert("Board updated successfully");

        completeBtn.classList.add("!bg-indigo-200", "text-white");
        completeBtn.disabled =true;

        const assignedTaskCount = document.getElementById("assigned-task-count").innerText;
        let convertedAssignedTaskCount = parseInt(assignedTaskCount);
        if (assignedTaskCount > 0){
            convertedAssignedTaskCount--;
        }
        // TODO: to show the last complete btn 2 alert
        if (convertedAssignedTaskCount === 0){
            alert("Congrats!! You have completed all the current tasks!")
            console.log("congrats");
        }

        document.getElementById("assigned-task-count").innerText = convertedAssignedTaskCount;

        const completeTaskCount = document.getElementById("complete-task-count").innerText;
        let convertedCompleteTaskCount = parseInt(completeTaskCount);
        if (completeTaskCount >=0){
            convertedCompleteTaskCount++
        }
        document.getElementById("complete-task-count").innerText = convertedCompleteTaskCount;

        const historyContainer = document.getElementById("task-complete-history");
        const historyItem = document.createElement("div");
        historyItem.classList.add("bg-blue-50", "rounded-lg", "p-3", "m-5","text-gray-500") ;
        const cardTitle =completeBtn.closest(".card").querySelector(".card-title").innerText;
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        historyItem.innerHTML = `
        You have Complete The Task <br>${cardTitle} at ${formattedTime}
        `
        historyContainer.appendChild(historyItem);

    })
}
