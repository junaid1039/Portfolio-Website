document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById('c1');
    let count = 0;
    let interval = setInterval(() => {
        counter.innerText = count;
        count++;
        if (count == 750) {
            clearInterval(interval);
        }
    }, 5);

    //header background color changing on scrolling
    window.onscroll = () => {
        scrollFunction();
    };

    function scrollFunction() {
        var header = document.getElementById('header');
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            header.style.backgroundColor = "#FFFFFF"; // Change to white when scrolled down
        } else {
            header.style.backgroundColor = 'transparent'; // Default color when at the top
        }
    }

});
