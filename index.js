const textAreaEl= document.getElementById('textarea');
textAreaEl.addEventListener("keydown", ()=>{
  updateCounters(); 
})
const Remain = document.getElementById('Remain')
const totalCounters= document.getElementById('toatalCounter');

function updateCounters(params) {


    toatalCounter.innerText=textAreaEl.value.length;


    Remain.innerText=textAreaEl.getAttribute("maxlength")-textAreaEl.value.length;
    if (textAreaEl.value.length >50 ) {
       alert('enough toatal counter');
        
    }
    
}
