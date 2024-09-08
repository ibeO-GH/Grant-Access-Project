// Js code
const checkAccessButton = document.querySelector(".access"); // equating variable to button

checkAccessButton.addEventListener("click", handleAccessCheck); // adding eventListener

function handleAccessCheck(event) {
  event.preventDefault();

  let role = document.querySelector("#role").value; // declaring variable for role

  let age = parseInt(document.querySelector("#age").value); // declaring variable for age
  /*

  if (isNaN(age)) {
    alert("Please enter a valid age.");
    return;
  }
*/
  let accessMessageElement = document.querySelector("#message"); // declaring variable for access message

  accessMessageElement.classList.remove("admin", "member", "guest", "denied"); // clear existing class
  if (role === "admin" || role === "moderator") {
    accessMessageElement.textContent = "You have full access!";
    accessMessageElement.classList.add("admin");
  } else if (role === "member" && age >= 18) {
    accessMessageElement.textContent = "You have access to member content!";
    accessMessageElement.classList.add("member");
  } else if (role === "guest") {
    accessMessageElement.textContent = "You have access to guest content!";
    accessMessageElement.classList.add("guest");
  } else {
    accessMessageElement.textContent = "Access denied!";
    accessMessageElement.classList.add("denied");
  }
}
