var quantity = 1;


function deleteMessage(){
    document.getElementById('addedToCartMessage').innerText = ''
}

function addToCart() {
    document.getElementById('addedToCartMessage').innerText = `Agregó ${quantity} unidades al carrito`;
    quantity = 0
    setTimeout(() => {
        updateQuantity() 
        deleteMessage()
    }, 2500);

}

function increaseQuantity() {
    quantity++;
    updateQuantity();
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantity();
    }
}

function updateQuantity() {
    document.getElementById('quantity').innerText = quantity;
}

let isFilled = false;

function toggleHeart() {
    const heartButton = document.getElementById('heartButton');
    isFilled = !isFilled;

    if (isFilled) {
        heartButton.innerText = 'favorite'; 
    } else {
        heartButton.innerText = 'favorite_border';
    }
}


document.addEventListener('DOMContentLoaded', function () {
});