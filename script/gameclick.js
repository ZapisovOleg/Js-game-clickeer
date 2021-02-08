

let clicks = 0 // 1здесь будем хранить кол кликов

const TIMEOUT = 5000; // 2ВРЕМЯ НА РАУНД

const display = document.querySelector('#display'); //3
const button = document.querySelector('#button'); //4
const counter = document.querySelector('#counter');//5

button.onclick = start;//6
function start() {//7
  const startTime = Date.now();
  display.textContent = formatTime(TIMEOUT);//8
  button.onclick = () => counter.textContent = clicks++;//9
  

  const interval = setInterval(() => {
const delta = Date.now() - startTime;
display.textContent = formatTime(TIMEOUT - delta);

  },100);
   setTimeout(() =>{
button.onclick = null;
display.textContent = 'Game Over';

clearInterval(interval);

  },TIMEOUT);
}

function formatTime(ms){
  return (ms /1000).toFixed(2);
}




