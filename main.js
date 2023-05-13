const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuhamicon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const menucarritoicon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailSecondary = document.querySelector('.product-detail-secondary')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const productdetail = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuhamicon.addEventListener('click', togglemobilemenu);
menucarritoicon.addEventListener('click', togglemenucarritoaside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    const asasideclosed = aside.classList.contains('inactive');
    if (!asasideclosed){
        aside.classList.add('inactive')};

    desktopMenu.classList.toggle('inactive');
}

function togglemobilemenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');
}

function togglemenucarritoaside(){
    //only for mobile version
    const ismobilemenuclosed = mobilemenu.classList.contains('inactive');
    
    if (!ismobilemenuclosed){
        mobilemenu.classList.add('inactive')};

    //only for desktop version
    
    const isProductDetailClosed = menucarritoicon.classList.contains('inactive');
    
    if (!isProductDetailClosed){
        menuEmail.classList.remove('inactive')};

    aside.classList.toggle('inactive');
}

function openProductDetailaside(){
    productdetail.classList.add('inactive');
    productDetailSecondary.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailSecondary.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Couch',
    price: 1300,
    img: 'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'lamp',
    price: 125,
    img: 'https://images.pexels.com/photos/7319165/pexels-photo-7319165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

/*<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
    </div>
</div> */

function renderProducts(arr){
    for (product of arr){
        const productcard = document.createElement('div');
        productcard.classList.add('product-card');

    // product = {name, price, img} => product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img)
        productImg.addEventListener('click', openProductDetailaside)
    
        const productinfo = document.createElement('div');
        productinfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCard);
    
        productinfo.appendChild(productInfoDiv);
        productinfo.appendChild(productInfoFigure);
    
        productcard.appendChild(productImg);
        productcard.appendChild(productinfo);
    
        cardsContainer.appendChild(productcard);
    }
}

renderProducts(productList)