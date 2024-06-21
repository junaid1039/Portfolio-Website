document.addEventListener('DOMContentLoaded');

{
let counter=document.getElementById('c1');
let count=1;
let interval = setInterval(() => {
    counter.innerText=count;
    count++;
    if(count==750){
        clearInterval(interval);
    }
    
}, 5);
}