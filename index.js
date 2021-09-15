let lines = [
    'My name is Muhammad Umair Saleem',
    'I live in Bangla Gogera and studying BS Software Engineering at University Of Okara',
    'To be honest University Of Okara is such a rubish Institute(Hahhaa)',
    'Chlo ab thore se numbers b type kr lo 12 ya 916',
    "I'm 20 years old and will be 21 next year(Hahhaa)",
    
];


// Utility Functions
const getRandom = ()=>{
    return Math.floor(Math.random() * (lines.length));
}

const getAccuracy = (value, line)=>{
    return (value.filter((val, ind)=>{
        return (value[ind]==line[ind]?true:false);
    }).length);
}

const getSpeed = ()=>{
    let value = textArea.value.trim();
    let line = lines[index];
    let accuracyLength = getAccuracy(value.split(' '), line.split(' '));
    let accuracy = `Accuracy: ${((accuracyLength/line.split(' ').length)*100).toFixed(2)}%`;
    let sp = Math.round(value.split(' ').length/(((date2-date1)/3600000)*60));
    let speed = `Speed: ${sp} Words Per Minute`;
    let speedElm = document.createElement('h2');
    let accuracyElm = document.createElement('h2');
    speedElm.textContent = accuracy;
    accuracyElm.textContent = speed;
    h2.textContent = '';
    h2.appendChild(accuracyElm);
    h2.appendChild(speedElm);
    
}





// Variable to hold random number returned by getRandom() function
let index = getRandom();
let date1;
let date2;




// Targeting DOM Elements
let h2 = document.querySelector('h2');
let textArea = document.querySelector('textarea');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');



const startTyping = ()=>{
    date1 = new Date();
    textArea.focus();
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
    textArea.setAttribute('placeholder', 'Type Here!');
    h2.textContent = lines[index];
    
}


const stopTyping = ()=>{
    date2 = new Date();
    stopBtn.style.display = 'none';
    startBtn.style.display = 'block';
    textArea.removeAttribute('placeholder');
    getSpeed();
    textArea.value = "";
    textArea.blur();
    
}





// DOM events 
startBtn.addEventListener('click',startTyping);

textArea.addEventListener('keypress', (e)=>{
    if(e.charCode==13){
        stopTyping();
    }
});

stopBtn.addEventListener('click', stopTyping);