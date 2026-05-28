//Array storage class
let carouselArr = [];

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static index = 0;
    static currentArr = [];

    static Start(arr){            
        if (arr && arr.length > 0){

            Carousel.currentArr = arr;
            Carousel.index = 0;

            Carousel.Next();

            setInterval(Carousel.Next, 2000);
        } else {
            console.error("O array de imagens está vazio ou não foi definido.");
        }
    }

    static Next() {
        const divCarousel = document.getElementById('carousel');
        const divTitle = document.getElementById('carousel-title');
        
        const itemAtual = Carousel.currentArr[Carousel.index];

        if (divCarousel && divTitle && itemAtual) {
            divCarousel.style.backgroundImage = `url(${itemAtual.image})`;
            divTitle.innerHTML = `<a href="${itemAtual.url}">${itemAtual.title}</a>`;
        }
   
        Carousel.index++;

        if (Carousel.index >= Carousel.currentArr.length) {
            Carousel.index = 0;
        }
    }
}
            
            // const mudarItem = () => {
            //     const itemAtual = arr[index];

    //             if (divCarousel && divTitle) {
    //                 divCarousel.style.backgroundImage = `url(${itemAtual.image})`;
    //                 divTitle.innerHTML = `<a href="${itemAtual.url}">${itemAtual.title}</a>`;
    //             }

    //             index++;

    //             if (index >= arr.length) {
    //                 index = 0;
    //             }
    //         };

    //         mudarItem();
    //         setInterval(mudarItem, 2000);

    //     } else {
    //         console.error("O array de imagens está vazio ou não foi definido.");
    //     }
    // }

    // static Next(){
        
    // }
    // };