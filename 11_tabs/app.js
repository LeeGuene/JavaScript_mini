const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", e=>{
  console.log(e.target.dataset.id);
  const id = e.target.dataset.id;

  // dataset 속성의 id값이 존재한다면 
  if(id){
    
    // 모든 버튼의 active 클래스 제거
    btns.forEach(btn=>{
      btn.classList.remove("active");
    });

    // 현재 클릭 이벤트가 발생한 버튼에만 active 클래스 추가
    e.target.classList.add("active");

    // 현재 이벤트가 발생한 버튼과 관련된 콘텐츠를 제외한 콘텐츠는 모두 숨김.
    articles.forEach(article=>{
      article.classList.remove("active");
    });

    // 이벤트가 발생한 버튼의 콘텐츠 ( data-id속성값으로 조회 )
    const element = document.querySelector(`#${id}`);
    element.classList.add("active");  
  }
});