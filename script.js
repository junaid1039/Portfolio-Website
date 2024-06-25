

document.addEventListener('DOMContentLoaded', () => {

    //header background color changing on scrolling

    window.onscroll = () => {
        scrollFunction();
    };

    function scrollFunction() {
        var header = document.getElementById('header');
        if (document.body.scrollTop > 500 & document.documentElement.scrollTop > 500) {
            header.style.backgroundColor = "#FFFFFF"; // Change to white when scrolled down
        } else {
            header.style.backgroundColor = 'transparent'; // Default color when at the top
        }
    }

    window.scrollIntoView = ('section-2') => {
        sectionto();
    };
    let sectionto = () => {
        let section2= document.getElementById('section-2');
        if(document.body.scrollIntoView || document.documentElement.scrollIntoView){
            let counter = document.getElementById('c1');
    let count = 0;
    let interval = setInterval(() => {
        counter.innerText = count;
        count++;
        if (count == 750) {
            clearInterval(interval);
        }
    }, 5);
    
        let counter2 = document.getElementById('c2');
        let count2 = 0;
        let interval2 = setInterval(() => {
            counter2.innerText = count2;
            count2++;
            if (count2 ==541){
                clearInterval(interval2);
            }
        }, 5);
        let counter3 = document.getElementById('c3');
        let count3 = 0;
        let interval3 = setInterval(() => {
            counter3.innerText = count3;
            count3++;
            if (count3 ==621){
                clearInterval(interval3);
            }
        }, 5);
        let counter4 = document.getElementById('c4');
        let count4 = 0;
        let interval4 = setInterval(() => {
            counter4.innerText = count3;
            count4++;
            if (count4 ==1000){
                clearInterval(interval4);
            }
        }, 5);


        }

    }


});
