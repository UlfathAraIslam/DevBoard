document.getElementById("clear-history-btn").addEventListener("click",function(event){
    const historyContainer = document.getElementById("task-complete-history");
    historyContainer.innerHTML = "";
})