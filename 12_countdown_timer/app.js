const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveway = document.querySelector(".giveway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// 미래 날짜를 구하기 위한 임시 날짜 ( 현재 날짜를 가지고 만듬 )
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear,tempMonth, tempDay, 16, 50, 0);
// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// months 배열 내에 저장되어 있는 영문으로 된 문자열을 월로 저장
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

// 카운트 다운 작업을 수행하는 메서드
function getRemaindingTime(){
  const today = new Date().getTime();

  // 미래 시간과 현재 시간 사이의 시간 간격 (밀리초 단위)
  const time = futureDate - today;

  // 1s = 1000ms | 1m = 60s | 1h = 60m | 1day = 24h
  // 1일, 1시간, 1분 단위 설정 
  // ( 밀리초를 가지고 일, 시, 분, 초를 계산하기 위해서 )
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = time / oneDay; // 일
  days = Math.floor(days);
  let hours = Math.floor(( time % oneDay ) / oneHour );
  let minutes = Math.floor( (time % oneHour ) / oneMinute );
  let seconds = Math.floor( (time % oneMinute ) / 1000 );

  const values = [days, hours, minutes, seconds];

  function format(item){
    if(item < 10){
      return ( item = `0${item}` );
    }
    return item;
  }

  items.forEach((item, index) =>{
    item.innerHTML = format(values[index]);
  });

  if(time < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class = "expired">sorry, this giveway has expired!!</h4>`;
  }

}

let countdown = setInterval(getRemaindingTime, 1000);
getRemaindingTime();

