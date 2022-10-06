let counterDisplayElem = document.querySelector('.counter-display ');
let counterMinusElem = document.querySelector('.minus');
let counterPlusElem = document.querySelector('.plus');
let resetBtn = document.querySelector('.reset');
let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
     
    count++;
    updateDisplay();
})

counterMinusElem.addEventListener("click",()=>{
    count--;
     updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
    
};
                
resetBtn.addEventListener("click",()=>{
    count = 0;
    updateDisplay();
   
})



if(updateDisplay(count) < 0){
    counterDisplayElem.style.color = 'red';
}else {
    counterDisplayElem.style.color = 'black';
    }