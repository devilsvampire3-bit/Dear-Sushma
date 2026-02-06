const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

yesBtn.addEventListener("click", () => {
  result.innerHTML = "😘😘😘! You said YES! ♥️";
});

noBtn.addEventListener("mouseover", () => {
  // When user tries to click NO, move the button
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
