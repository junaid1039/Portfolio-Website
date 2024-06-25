document.addEventListener('DOMContentLoaded', () => {

    //header background color changing on scrolling
    window.onscroll = () => {
        scrollFunction();
    };

    function scrollFunction() {
        var header = document.getElementById('header');
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            header.style.backgroundColor = "#FFFFFF"; // Change to white when scrolled down
        } else {
            header.style.backgroundColor = 'transparent'; // Default color when at the top
        }
    }

    // Function to scroll to section-2 and start counter
    function sectionto() {
        let section2 = document.getElementById('c1');
        section2.scrollIntoView({ behavior: 'smooth' });

        let counter = document.getElementById('c1');
        let count = 0;
        let interval = setInterval(() => {
            counter.innerText = count;
            count++;
            if (count == 750) {
                clearInterval(interval);
            }
        }, 5);
    }

    // Scroll to section-2 when needed
    window.scrollToSection2 = () => {
        sectionto();
    };

});
