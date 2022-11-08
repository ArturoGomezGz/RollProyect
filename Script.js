const LosMasVendidos = document.getElementById("los-mas-vendidos");
const dulces = document.getElementById("dulces");
const salados = document.getElementById("salados");
const bebidas = document.getElementById("bebidas");
const botonCarrito = document.getElementById("carritoButton");
const carrito = document.getElementById("carrito");
const menuMovil = document.getElementById("menu-movil");
const botonMenuMnovil = document.getElementById("boton-menu-movil");

const lmvSection = document.getElementById("LMV-section");
const dulcesSection = document.getElementById("dulces-section");
const saladosSection = document.getElementById("salados-section");
const bebidasSection = document.getElementById("bebidas-section");

const lmvNavButton = document.getElementById("lo-mas-vendido-nav");
const dulcesNavButton = document.getElementById("dulces-nav-button");
const saladosNavButton = document.getElementById("salados-nav-button");
const bebidasNavButton = document.getElementById("bebidas-nav-button");

const lmvNavButtonMov = document.getElementById("lo-mas-vendido-nav-mov");
const dulcesNavButtonMov = document.getElementById("dulces-nav-button-mov");
const saladosNavButtonMov = document.getElementById("salados-nav-button-mov");
const bebidasNavButtonMov = document.getElementById("bebidas-nav-button-mov");

lmvNavButton.addEventListener("click", () => barrscroller(lmvSection));
lmvNavButtonMov.addEventListener("click", () => barrscroller(lmvSection));
dulcesNavButton.addEventListener("click", () => barrscroller(dulcesSection));
dulcesNavButtonMov.addEventListener("click", () => barrscroller(dulcesSection));
saladosNavButton.addEventListener("click", () => barrscroller(saladosSection));
saladosNavButtonMov.addEventListener("click", () => barrscroller(saladosSection));
bebidasNavButton.addEventListener("click", () => barrscroller(bebidasSection));
bebidasNavButtonMov.addEventListener("click", () => barrscroller(bebidasSection));


function barrscroller(section){
    section.scrollIntoView({
        behavior: "smooth"
    })
}

botonCarrito.addEventListener("click", openCarrito);
botonMenuMnovil.addEventListener("click", openMovilMenu);

function openCarrito(){
    carrito.classList.toggle("carritoInactive")
    menuMovil.classList.add("inactiveMovilMenu")
};
function openMovilMenu(){
    menuMovil.classList.toggle("inactiveMovilMenu")
    carrito.classList.add("carritoInactive")
}

var productList = []


function createProducts(){
    productList.push({
        id: "RollDePeperoni",
        name: "Roll de peperoni",
        price: 25,
        image: "./Imagenes/HORMEL PNG.jpg",
        tipo: "salado",
        masVendido: true
    })
    productList.push({
        id: "RollDeChocolate",
        name: "Roll de chocolate",
        price: 25,
        image: "./Imagenes/hqdefault.jpg",
        tipo: "dulce",
        masVendido: true
    })
    productList.push({
        id: "CocaCola",
        name: "CocaCola",
        price: 15,
        image: "./Imagenes/CocaCola.jpeg",
        tipo: "bebida",
        masVendido: true
    })
    productList.push({
        id: "Sprite",
        name: "Sprite",
        price: 15,
        image: "./Imagenes/sprite.jpg",
        tipo: "bebida",
        masVendido: false
    })
    productList.push({
        id: "RollDeCanela",
        name: "Roll de canela",
        price: 25,
        image: "./Imagenes/rollDeCanela.jpeg",
        tipo: "dulce",
        masVendido: false
    })
}

function renderLosMasVendidos(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.classList.add(product.masVendido);
        productCard.classList.add(product.tipo);


        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");

        const agregarAlCarritoContainer = document.createElement("div");
        agregarAlCarritoContainer.classList.add("agregar-al-carrito");

        const productPriceName = document.createElement("div");
        productPriceName.classList.add("name-and-price");

        const productImg = document.createElement("img");
        productImg.classList.add("imagen-de-producto");
        productImg.setAttribute("src", product.image);

        const productName = document.createElement("p");
        productName.classList.add("nombre-de-producto-card");
        productName.innerText = product.name;

        const productPrice = document.createElement("p");
        productPrice.classList.add("precio-de-producto-card");
        productPrice.innerText = "$" + product.price;

        const agregarAlCarrito = document.createElement("img");
        agregarAlCarrito.setAttribute("src", "Imagenes/agregarAlcarrito.png");

        productPriceName.appendChild(productName);
        productPriceName.appendChild(productPrice);

        cardInfo.appendChild(productPriceName);
        cardInfo.appendChild(agregarAlCarritoContainer);

        agregarAlCarritoContainer.appendChild(agregarAlCarrito);

        productCard.appendChild(productImg);
        productCard.appendChild(cardInfo);
        

        LosMasVendidos.appendChild(productCard);

    }
}

function renderDulces(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.classList.add(product.tipo);
        productCard.classList.add(product.masVendido)

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");

        const agregarAlCarritoContainer = document.createElement("div");
        agregarAlCarritoContainer.classList.add("agregar-al-carrito");

        const productPriceName = document.createElement("div");
        productPriceName.classList.add("name-and-price");

        const productImg = document.createElement("img");
        productImg.classList.add("imagen-de-producto");
        productImg.setAttribute("src", product.image);

        const productName = document.createElement("p");
        productName.classList.add("nombre-de-producto-card");
        productName.innerText = product.name;

        const productPrice = document.createElement("p");
        productPrice.classList.add("precio-de-producto-card");
        productPrice.innerText = "$" + product.price;

        const agregarAlCarrito = document.createElement("img");
        agregarAlCarrito.setAttribute("src", "Imagenes/agregarAlcarrito.png");

        productPriceName.appendChild(productName);
        productPriceName.appendChild(productPrice);

        cardInfo.appendChild(productPriceName);
        cardInfo.appendChild(agregarAlCarritoContainer);

        agregarAlCarritoContainer.appendChild(agregarAlCarrito);

        productCard.appendChild(productImg);
        productCard.appendChild(cardInfo);
        

        dulces.appendChild(productCard);

    }
}

function renderSalados(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.classList.add(product.tipo);
        productCard.classList.add(product.masVendido)

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");

        const agregarAlCarritoContainer = document.createElement("div");
        agregarAlCarritoContainer.classList.add("agregar-al-carrito");

        const productPriceName = document.createElement("div");
        productPriceName.classList.add("name-and-price");

        const productImg = document.createElement("img");
        productImg.classList.add("imagen-de-producto");
        productImg.setAttribute("src", product.image);

        const productName = document.createElement("p");
        productName.classList.add("nombre-de-producto-card");
        productName.innerText = product.name;

        const productPrice = document.createElement("p");
        productPrice.classList.add("precio-de-producto-card");
        productPrice.innerText = "$" + product.price;

        const agregarAlCarrito = document.createElement("img");
        agregarAlCarrito.setAttribute("src", "Imagenes/agregarAlcarrito.png");

        productPriceName.appendChild(productName);
        productPriceName.appendChild(productPrice);

        cardInfo.appendChild(productPriceName);
        cardInfo.appendChild(agregarAlCarritoContainer);

        agregarAlCarritoContainer.appendChild(agregarAlCarrito);

        productCard.appendChild(productImg);
        productCard.appendChild(cardInfo);
        

        salados.appendChild(productCard);

    }
}

function renderBebidas(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.classList.add(product.tipo);
        productCard.classList.add(product.masVendido)

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");

        const agregarAlCarritoContainer = document.createElement("div");
        agregarAlCarritoContainer.classList.add("agregar-al-carrito");

        const productPriceName = document.createElement("div");
        productPriceName.classList.add("name-and-price");

        const productImg = document.createElement("img");
        productImg.classList.add("imagen-de-producto");
        productImg.setAttribute("src", product.image);

        const productName = document.createElement("p");
        productName.classList.add("nombre-de-producto-card");
        productName.innerText = product.name;

        const productPrice = document.createElement("p");
        productPrice.classList.add("precio-de-producto-card");
        productPrice.innerText = "$" + product.price;

        const agregarAlCarrito = document.createElement("img");
        agregarAlCarrito.setAttribute("src", "Imagenes/agregarAlcarrito.png");

        productPriceName.appendChild(productName);
        productPriceName.appendChild(productPrice);

        cardInfo.appendChild(productPriceName);
        cardInfo.appendChild(agregarAlCarritoContainer);

        agregarAlCarritoContainer.appendChild(agregarAlCarrito);

        productCard.appendChild(productImg);
        productCard.appendChild(cardInfo);
        

        bebidas.appendChild(productCard);

    }
}

createProducts();

renderSalados(productList);
renderLosMasVendidos(productList);
renderDulces(productList);
renderBebidas(productList)