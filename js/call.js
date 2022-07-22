// Calling Copyright Variable
const copy = document.getElementById("copy");
const udate = new Date();
copy.innerText = udate.getFullYear();

// Calling Contact
const contact = document.getElementById("contact");

// Add Listener for Contact
 contact.addEventListener("click", contactForm);
