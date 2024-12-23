// Simulates the division name appearing letter by letter
const divisionNameText = "Special Call Division"; // Replace with your division name
const divisionNameElement = document.getElementById("divisionName");
let index = 0;

function displayDivisionName() {
  if (index < divisionNameText.length) {
    divisionNameElement.textContent += divisionNameText[index];
    index++;
    setTimeout(displayDivisionName, 100); // Adjust speed by changing 100 (in ms)
  }
}

// Call the function after the page loads
window.onload = displayDivisionName;

// Function for Get Details button (You can customize this)
function getDetails() {
  const name = document.getElementById("name").value;
  const fileNo = document.getElementById("fileNo").value;
  if (name && fileNo) {
    alert(`Name: ${name}\nFile Number: ${fileNo}`);
  } else {
    alert("Please fill out both fields.");
  }
}
