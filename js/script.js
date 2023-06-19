
const images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
];

const itemsContainer = document.querySelector('.container');

for (let i = 0; i < images.length; i++) {
    console.log(i, images [i]);

    if(i == 0){
        itemsContainer.innerHTML += `
            <div class="img-container my-img active">
                <img src="${images[i]}" alt="">
            </div>
        `
    }
    else{
        itemsContainer.innerHTML += `
            <div class="img-container my-img">
                <img src="${images[i]}" alt="">
            </div>
        `
    }

}
        