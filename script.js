let searchform = document.querySelector('.search-form')


document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    cartitem.classList.remove('active');
    nevbar.classList.remove('active');
}


let nevbar = document.querySelector('.nevbar')


document.querySelector('#menu-btn').onclick = () =>{
    nevbar.classList.toggle('active');
    cartitem.classList.remove('active');
    searchform.classList.remove('active');
}


let cartitem = document.querySelector('.cart-container')


document.querySelector('#cart-btn').onclick = () =>{
    cartitem.classList.toggle('active');
    nevbar.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll = () =>{
    cartitem.classList.remove('active');
    nevbar.classList.remove('active');
    searchform.classList.remove('active');
}


let flag = 0;



function controller(x){

    flag = flag + x;
    slideshow(flag);
}


slideshow(flag);

function slideshow(num){
    let image = document.getElementsByClassName('image');

    if(num == image.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = image.length-1;
        num = image.length-1;

    }

    for(let y of image){
        y.style.display = "none";
    }

    image[num].style.display = "block";
}















