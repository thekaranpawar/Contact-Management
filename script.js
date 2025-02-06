function saveContact(){

// Input values

let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let mobileNumber = document.getElementById("mobileNumber").value;
let status = document.getElementById("status").value;

// Validate input

if (firstName.trim() === "" || lastName.trim() === "" || mobileNumber.trim() === "") {
    alert("Please enter first name, last name, and mobile number.");
    return ;
}

// Create the card div

let card = document.createElement("div");
card.classList.add("card");

// Profile image section

let profileImg = document.createElement("div");
profileImg.classList.add("profile-img");
let img = document.createElement("img");
img.src = "person.png";
profileImg.appendChild(img);

// Info section

let info = document.createElement("div");
info.classList.add("info");
info.innerHTML = `
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Mobile:</strong> ${mobileNumber}</p>
    <p><strong>Status:</strong> ${status}</p>
`;

// Delete button

let deleteButton = document.createElement("button");
deleteButton.classList.add("btn", "delete-btn");
deleteButton.innerText = "Delete";
deleteButton.onclick = function () {
     card.remove();
};

let buttons = document.createElement("div");
buttons.classList.add("buttons");
buttons.appendChild(deleteButton);

card.appendChild(profileImg);
card.appendChild(info);
card.appendChild(buttons);

document.getElementById("cardContainer").appendChild(card);

// Clear 
document.getElementById("firstName").value = "";
document.getElementById("lastName").value = "";
document.getElementById("mobileNumber").value = "";
}