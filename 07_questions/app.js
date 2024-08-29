const questions = document.querySelectorAll(".question");

questions.forEach(question =>{
  const btn = question.querySelector(".question-btn");
  
  btn.addEventListener("click", ()=>{
    // 불필요한 코드!!
    // questions.forEach(item =>{
    //   console.log(item);
    //   // 이벤트가 발생한 question(item)과 일치하는 question을 제외한
    //   // 나머지 question에는 show-text 클래스를 제거
    //   if(item !== question){
    //     // item.classList.remove("show-text");
    //   }
    // });

    question.classList.toggle("show-text");
  });
});
