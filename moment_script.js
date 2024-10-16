let startBtn = document.getElementById('start');
let restartBtn = document.getElementById('restart');
let pauseBtn = document.getElementById('pause');
let resumeBtn = document.getElementById('resume');
let timeElem = document.getElementById('timeElem');

startBtn.addEventListener('click',startFunc);
pauseBtn.addEventListener('click',pauseFunc);
resumeBtn.addEventListener('click',resumeFunc);
restartBtn.addEventListener('click',restartFunc);

let a;
let b;
let c;

function startStopWatch(){
    let minutes = timeElem.innerText.slice(0,2)
    let seconds = timeElem.innerText.slice(3,5);
    let milliSeconds = timeElem.innerText.slice(6,8);
    a = setInterval(() => {
        minutes++;
        if(minutes<=9){
            minutes = `0${minutes}`
        }
        if(minutes=='60'){
            minutes = '00';
        };
    }, 60000);
    b = setInterval(() => {
        seconds++;
        if(seconds<=9){
            seconds = `0${seconds}`
        }
        if(seconds=='60'){
            seconds = '00';
        };
    }, 1000);
    c = setInterval(() => {
        milliSeconds++;
        if(milliSeconds<=9){
            milliSeconds = `0${milliSeconds}`
        }
        if(milliSeconds=='100'){
            milliSeconds = '00';
        };
        timeElem.innerHTML = `${minutes}:${seconds}:${milliSeconds}`;
    }, 10);
}

function startFunc(){
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
    startStopWatch();
};

function pauseFunc(){
    clearInterval(a);
    clearInterval(b);
    clearInterval(c);
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'inline-block' 
    restartBtn.style.display = 'inline-block' 
}

function resumeFunc(){
    startStopWatch();
    restartBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
}

function restartFunc(){
    timeElem.innerText = '00:00:00';
    restartBtn.style.display = 'none';
}