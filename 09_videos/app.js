const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
console.log(video.nextElementSibling);

btn.addEventListener("click", ()=>{
  if(!btn.classList.contains("slide")){
    btn.classList.add("slide");
    // video.nextElementSibling.style.display = 'none';
    // video.style.zIndex = 5;
    video.pause();
  }else{
    btn.classList.remove("slide");
    video.play();
  }
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", ()=>{
  preloader.classList.add("hide-preloader");
})