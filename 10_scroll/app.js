 // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

// footer의 date 태그의 내용을 현재 연도로 표시
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

// close links 
const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){

  // links(요소)의 높이
  const linksHeight = links.getBoundingClientRect().height;
  // links-container(요소)의 높이
  const containerHeight = linksContainer.getBoundingClientRect().height;

  // links-container의 높이가 0이면 
  if(containerHeight === 0){
    // 높이를 links의 높이로 설정
    linksContainer.style.height = `${linksHeight}px`;
  } else{
    // 높이가 0이 아니면 0으로 설정
    linksContainer.style.height = 0;
  }
});

// fixed navber
const navbar = document.querySelector("nav");
const toplink = document.querySelector(".top-link");
console.log(toplink);

toplink.addEventListener("click", ()=>{
  window.scrollTo({
    top: 0
  });
});

window.addEventListener("scroll", function(){
  // 현재 창의 높이 ( 웹 브라우저 기준 )
  const scrollHeight = window.pageYOffset;
  // console.log(scrollHeight);
  // nav의 높이 : 82px
  const navHeight = navbar.getBoundingClientRect().height;
  // console.log(navHeight);

  // 스크롤 바가 nav 높이보다 더 내려오면 ( navbar에 스타일 적용 )
  if(scrollHeight > navHeight){
    navbar.classList.add("fixed-nav");
  }else{
    navbar.classList.remove("fixed-nav");
  }

  // 스크롤 한 높이가 500px 넘어가면 top-link 버튼이 보여지도록 설정
  if(scrollHeight > 500){
    toplink.classList.add("show-link");
  }else{
    toplink.classList.remove("show-link");
  }

  // smooth scroll : 스크롤이 부드럽게 
  // 링크 선택
  const scrollLinks = document.querySelectorAll(".scroll-link");

  scrollLinks.forEach(link=>{

    link.addEventListener("click", e=>{

      e.preventDefault();
      // 스크롤로 이동되는 위치를 설정
      // a태그의 href속성값 중에서 1번째 문자를 제외한 문자열 저장
      // const id = e.currentTarget.getAttribute("href");
      const id = e.currentTarget.getAttribute("href").slice(1);
      // console.log(id);
      // const element = document.querySelector(`${id}`);
      const element = document.getElementById(id);

      // nav의 높이
      const navHeight = navbar.getBoundingClientRect().height;
      // links-container의 높이
      const containerHeight = linksContainer.getBoundingClientRect().height;
      // nav태그의 class속성값에 fixed-nav의 포함여부
      const fixedNav = navbar.classList.contains("fixed-nav");
      let position = element.offsetTop - navHeight;
      console.log(element.offsetTop);

      if(!fixedNav){
        position = position - navHeight;
      }
      if(navHeight > 82){
        position = position + containerHeight;
      }

      // navbar 버튼 클릭시 실제로 이동되도록 설정
      window.scrollTo({
        left: 0,
        top: position
      });
    });
    linksContainer.style.height = 0;

  });
});

