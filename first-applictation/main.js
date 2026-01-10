const input = document.querySelector(".vanilla-input");
console.log(input);
const p = document.querySelector(".vanilla-p");

input.addEventListener("input", (e) => {
  console.log(e.target.value);
  p.textContent = e.target.value;
});
