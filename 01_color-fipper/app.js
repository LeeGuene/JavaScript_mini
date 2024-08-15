const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.onclick = function(){
  const randomNumber = getRandomNumber();

  color.textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
}

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
