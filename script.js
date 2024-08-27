const toggleButton = document.getElementById("toggle-button");
const seeMoreLess = document.getElementById("see-more-less");
const hiddenCards = document.querySelectorAll(".hidden");

toggleButton.addEventListener("click", () => {
  hiddenCards.forEach((card) => {
    card.classList.toggle("hidden");
  });

  if (seeMoreLess.textContent === "See More Products") {
    seeMoreLess.textContent = "See Less";
  } else {
    seeMoreLess.textContent = "See More Products";
  }
});

document.getElementById("subBtn").addEventListener("click", function (event) {
  const emailInput = document.getElementById("subEmail");
  const messageDiv = document.getElementById("subMessage");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput.value)) {
    messageDiv.textContent = "Subscription successful";
    messageDiv.style.color = "lightgreen";
  } else {
    messageDiv.textContent = "Please Enter Your valid Email Address";
    messageDiv.style.color = "#F48E28";
  }
  messageDiv.style.display = "initial";
});
