window.addEventListener('DOMContentLoaded', () => {
    const carouselList = document.querySelector('.carousel_list');
    const carouselItem = document.querySelectorAll('.carousel_item');
    const dotsItem = document.querySelectorAll(".dosts_item");
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const slideWidth = carouselItem[0].offsetWidth;
    // const slideTotalLength = carouselItem.length * slideWidth;
    let locationX = 0;
    let count = 0;

    next.onclick = function () {
        if (count < carouselItem.length - 1) {
            count++;
            locationX -= slideWidth + 1;
            carouselItem[count].style = "padding: 0 10px;"
            carouselList.style = `transform: translateX(${locationX}px)`;
            dotsActive()
        } else {

            // go back first element
            carouselList.style = `
                opacity: 0;
                overflow: hidden;
                transform: translateX(${slideWidth}px);
                transition: none;
            `
            setTimeout(() => {
                count = 0;
                dotsActive();
                locationX = 0;
                carouselList.style = `transform: translateX(${locationX}px);
                 opacity: 1;
                 overflow: visible;
                transition: all .25s ease-in-out;
                `;
                carouselItem[count].style = "padding: 0 10px;"
            }, 400)


        }
    }

    prev.onclick = function () {
        if (count <= 0) {
            locationX = -(slideWidth * 3 + 3);

            carouselList.style = `
                opacity: 0;
                overflow: hidden;
                transform: translateX(${locationX}px);
                transition: none;
            `

            setTimeout(() => {
                count = carouselItem.length - 1;
                dotsActive();
                carouselList.style = `
                opacity: 1;
                overflow: visible;
                transition: all .4s ease-in-out;
                transform: translateX(${locationX}px);
            `;
                carouselItem[count].style = "padding: 0 10px;"
            }, 400)


        } else {
            // go back last element
            count--;
            dotsActive();
            locationX += slideWidth + 1;
            carouselList.style = `transform: translateX(${locationX}px)`;
            carouselItem[count].style = "padding: 0 10px;"

        }
    }

    // dots 

    function dotsActive() {
        dotsItem.forEach(dot => {
            if (dot.id == count) {
                dot.style = "background: white;"
            } else {
                dot.style = "background: black;"
            }
        })
    }

    dotsActive()
    // // loop infiniti
    // function loopImg() {
    //     locationX = 1250
    //     carouselList.style = "overflow: hidden; opacity: 0"

    //     setTimeout(() => {
    //         carouselList.addEventListener('transitionend', () => {
    //             locationX = 0;
    //             if (carouselItem[count].id === 'lastChild') {
    //                 carouselList.style = `transform: translateX(${locationX}px)`;
    //             }
    //         })
    //     }, 5)
    // }
});
