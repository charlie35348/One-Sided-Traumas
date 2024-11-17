function prevpage() {
    window.location.href = "index.html";
}
function nextpage()
{
    window.location.href = "page-6.html";
}
document.getElementById("traumatype").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const selectedOption = document.querySelector('input[name="trauma"]:checked');
    if (selectedOption) {
        const traumaType = selectedOption.value;

        // Redirect based on the selected trauma type
        if (traumaType === "Family Trauma") {
            window.location.href = "page-3.html"; // Redirect to page1
        } else if (traumaType === "Friendship Trauma") {
            window.location.href = "page-4.html"; // Redirect to page2
        } else if (traumaType === "Love Relationship Trauma") {
            window.location.href = "page-5.html"; // Redirect to page3
        }
    } else {
        alert("Please select an option before submitting.");
    }
});

















