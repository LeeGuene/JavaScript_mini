let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn =>{
  btn.addEventListener("click", e=>{
    const styles = e.currentTarget.classList;
    // console.log(e.currentTarget.classList);
    if(styles.contains("decrease")){
      count--;
    }else if(styles.contains("increase")){
      count++;
    }else{ // reset 버튼이라면
      count = 0;
    }

    // 숫자 범위에 따라 출력되는 숫자에 색상 css 적용
    if(count > 0 ){
      value.style.color = 'green';
    }else if(count < 0){
      value.style.color = 'red';
    }else{
      value.style.color = '#bbb';
    }

    value.textContent = count;

  })
});