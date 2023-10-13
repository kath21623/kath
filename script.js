document.addEventListener("DOMContentLoaded", function() {
    const acceptButton = document.getElementById("acceptButton");
    const declineButton = document.getElementById("declineButton");

    acceptButton.addEventListener("click", function() {
        alert("Thank you! I'll be in touch soon.");
    });

    declineButton.addEventListener("click", function() {
        alert("Take your time to think about it. I'll respect your decision.");
    });
});
