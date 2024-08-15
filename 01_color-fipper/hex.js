const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

console.log(Math.floor(Math.random() * 16));

btn.addEventListener("click", function(){
  let hexColor = "#";
  // 6자리의 무작위 숫자를 문자열 뒤에 붙여서 
  // 헥사코드를 생성함.
  for(let i = 0; i < 6; i++){
    hexColor = hexColor + hex[getRandomNumber()];
  }

  // span 태그의 내용물 변경
  color.textContent = hexColor;
  // 웹 페이지 전체 배경색 설정
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
  // 0 ~ 15 까지의 무작위 숫자 반환
  return Math.floor(Math.random() * hex.length);
}
