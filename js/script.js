
const images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
];

let activeId = 0;

const itemsContainer = document.querySelector('.container');

//CREO LE IMMAGINI IN PAGINA
for (let i = 0; i < images.length; i++) {
    console.log(i, images [i]);

    if(i == 0){
        itemsContainer.innerHTML += `
            <div class="img-container my-img active" id="img_${i}">
                <img src="${images[i]}" alt="">
            </div>
        `
    }
    else{
        itemsContainer.innerHTML += `
            <div class="img-container my-img" id="img_${i}">
                <img src="${images[i]}" alt="">
            </div>
        `
    }
}

const myButtonNext = document.querySelector('.next')

myButtonNext.addEventListener( 'click',function(){

    const activeImage = document.getElementById('img_'+activeId);
    
    if(activeId < images.length-1){    
        activeId++;
    }else{
        activeId = 0;
    }

    const nextImage = document.getElementById('img_'+activeId);

    activeImage.classList.remove('active');
    nextImage.classList.add('active');
    
})

const myButtonPrev = document.querySelector('.prev')

myButtonPrev.addEventListener( 'click',function(){

    const activeImage = document.getElementById('img_'+activeId);
    
    if(activeId > 0){    
        activeId--;
    }else{
        activeId = images.length-1;
    }

    const nextImage = document.getElementById('img_'+activeId);

    activeImage.classList.remove('active');
    nextImage.classList.add('active');
    
})

