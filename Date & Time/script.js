document.addEventListener("DOMContentLoaded", function () {
    const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function getCurrentTime() {
        const now = new Date();
        const day = daylist[now.getDay()];
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        return { day, time };
    }

    function updateDisplay() {
        const { day, time } = getCurrentTime();
        const dayElement = document.getElementById("day");
        const timeElement = document.getElementById("time");

        dayElement.textContent = `Today is: ${day}.`;
        timeElement.textContent = `Current Time: ${time}`;
    }

    updateDisplay();
});
