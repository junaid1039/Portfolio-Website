document.addEventListener('DOMContentLoaded', () => {
// header response javascript code
    nav = document.querySelector('#bar');
    nav.onclick = function(){
      navigations = document.querySelector('.nave');
      navigations.classList.toggle("active");
    }
//header code end here

    function scrollFunction() {
        var header = document.getElementsByClassName('header');
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            header.style.backgroundColor = "#FFFFFF"; // Change to white when scrolled down
        } else {
            header.style.backgroundColor = 'transparent'; // Default color when at the top
        }
    }
      
});
