let productList = []
let productsInCart = []

let RollDePeperoni = {
    id: "RollDePeperoni",
    name: "Roll de peperoni",
    price: 25,
    image: "./Imagenes/HORMEL PNG.jpg",
    tipo: "salado",
    masVendido: true,
    cantidad: 0
};
let RollDeChocolate = {
    id: "RollDeChocolate",
    name: "Roll de chocolate",
    price: 25,
    image: "./Imagenes/hqdefault.jpg",
    tipo: "dulce",
    masVendido: true,
    cantidad: 0
}
let CocaCola = {
    id: "CocaCola",
    name: "CocaCola",
    price: 15,
    image: "./Imagenes/CocaCola.jpeg",
    tipo: "bebida",
    masVendido: true,
    cantidad: 0
}
let Sprite = {
    id: "Sprite",
    name: "Sprite",
    price: 15,
    image: "./Imagenes/sprite.jpg",
    tipo: "bebida",
    masVendido: false,
    cantidad: 0
}
let RollDeCanela = {
    id: "RollDeCanela",
    name: "Roll de canela",
    price: 25,
    image: "./Imagenes/rollDeCanela.jpeg",
    tipo: "dulce",
    masVendido: false,
    cantidad: 0
}

/* Barra de navegación (Movil y desktop) */
function createNavBarrs(){
    const lmvNavButton = document.getElementById("lo-mas-vendido-nav");
    const dulcesNavButton = document.getElementById("dulces-nav-button");
    const saladosNavButton = document.getElementById("salados-nav-button");
    const bebidasNavButton = document.getElementById("bebidas-nav-button");

    const lmvNavButtonMov = document.getElementById("lo-mas-vendido-nav-mov");
    const dulcesNavButtonMov = document.getElementById("dulces-nav-button-mov");
    const saladosNavButtonMov = document.getElementById("salados-nav-button-mov");
    const bebidasNavButtonMov = document.getElementById("bebidas-nav-button-mov");

    const lmvSection = document.getElementById("LMV-section");
    const dulcesSection = document.getElementById("dulces-section");
    const saladosSection = document.getElementById("salados-section");
    const bebidasSection = document.getElementById("bebidas-section");

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
}
createNavBarrs()
/* ----------------------------------------------------------------------------------------- */

/* Carrito y menu movil */
function createCarrito(){
    const menuMovil = document.getElementById("menu-movil");
    const botonMenuMnovil = document.getElementById("boton-menu-movil");

    const botonCarrito = document.getElementById("carritoButton");
    const carrito = document.getElementById("carrito");

    botonMenuMnovil.addEventListener("click", openMovilMenu);
    botonCarrito.addEventListener("click", openCarrito);

    function openCarrito(){
        carrito.classList.toggle("carritoInactive")
        menuMovil.classList.add("inactiveMovilMenu")
        refreshcart()
        cleanCarrito()
        renderCarrito()
    };
    function openMovilMenu(){
        menuMovil.classList.toggle("inactiveMovilMenu")
        carrito.classList.add("carritoInactive")
    }
}
createCarrito()
/* ----------------------------------------------------------------------------------------- */

/* Productos */
function createProductlistsAndProducts(){
    const LosMasVendidos = document.getElementById("los-mas-vendidos");
    const dulces = document.getElementById("dulces");
    const salados = document.getElementById("salados");
    const bebidas = document.getElementById("bebidas");

    function createProducts(){
        productList.push(RollDePeperoni);
        productList.push(RollDeChocolate);
        productList.push(CocaCola);
        productList.push(Sprite);
        productList.push(RollDeCanela);
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
            agregarAlCarritoContainer.classList.add("boton-agregar-al-carrito-" + product.id);

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
            agregarAlCarritoContainer.classList.add("boton-agregar-al-carrito-" + product.id);

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
            agregarAlCarritoContainer.classList.add("boton-agregar-al-carrito-" + product.id);

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
            agregarAlCarritoContainer.classList.add("boton-agregar-al-carrito-" + product.id);

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

}
createProductlistsAndProducts()
/* ----------------------------------------------------------------------------------------- */
let cantidadObjetosEnCarrito = document.getElementById("cantidad-productos-en-carrito");

function refreshcart(){
    cantidadObjetosEnCarrito.innerText = null;
    cantidadObjetosEnCarrito.innerText = productsInCart.length
}
function renderCarrito(){
    cantidadObjetosEnCarrito == productsInCart.length
    for (product of productsInCart){

        const carrito = document.getElementById("carrito")

        const ProductoEnCarrito = document.createElement("div");
        ProductoEnCarrito.classList.add("producto-en-carrito");

        const pictureProductoEnCarrito = document.createElement("div");
        pictureProductoEnCarrito.classList.add("imagen-de-producto-en-carrito");

        const NombreYPrecio = document.createElement("div");
        NombreYPrecio.classList.add("nombre-y-precio");

        const imagenProductoEnCarrito = document.createElement("img");
        imagenProductoEnCarrito.setAttribute("src", product.image);

        const nombreProductoCarrito = document.createElement("p");
        nombreProductoCarrito.innerText = product.name;
        
        const precioProductoCarrito = document.createElement("p");
        precioProductoCarrito.innerText = "$" + product.price;

        const cantidadProductoCarrito = document.createElement("p");
        cantidadProductoCarrito.innerText = "Cantidad = " + product.cantidad;

        const botonBorrarProductoCarrito = document.createElement("p");
        botonBorrarProductoCarrito.innerText = "X"
        botonBorrarProductoCarrito.classList.add("boton-borrar-producto-de-carrito")

        NombreYPrecio.appendChild(nombreProductoCarrito);
        NombreYPrecio.appendChild(precioProductoCarrito);

        pictureProductoEnCarrito.appendChild(imagenProductoEnCarrito);

        ProductoEnCarrito.appendChild(pictureProductoEnCarrito);
        ProductoEnCarrito.appendChild(NombreYPrecio);
        ProductoEnCarrito.appendChild(cantidadProductoCarrito);
        ProductoEnCarrito.appendChild(botonBorrarProductoCarrito);

        carrito.appendChild(ProductoEnCarrito);

    }
}
function cleanCarrito(){
    carrito.innerHTML = null
}

const botonAddTocartRollDePeperoni = document.getElementsByClassName("boton-agregar-al-carrito-RollDePeperoni");
const botonAddTocartRollDeChocolate = document.getElementsByClassName("boton-agregar-al-carrito-RollDeChocolate");
const botonAddTocartRollDeCanela = document.getElementsByClassName("boton-agregar-al-carrito-RollDeCanela");
const botonAddTocartCocaCola = document.getElementsByClassName("boton-agregar-al-carrito-CocaCola");
const botonAddTocartSprite = document.getElementsByClassName("boton-agregar-al-carrito-Sprite");

for (let i = 0; i < botonAddTocartRollDePeperoni.length; i++) {
    botonAddTocartRollDePeperoni[i].addEventListener("click", () => addProductToCart(RollDePeperoni));
}
for (let i = 0; i < botonAddTocartRollDeChocolate.length; i++) {
    botonAddTocartRollDeChocolate[i].addEventListener("click", () => addProductToCart(RollDeChocolate));
}
for (let i = 0; i < botonAddTocartRollDeCanela.length; i++) {
    botonAddTocartRollDeCanela[i].addEventListener("click", () => addProductToCart(RollDeCanela));
}
for (let i = 0; i < botonAddTocartCocaCola.length; i++) {
    botonAddTocartCocaCola[i].addEventListener("click", () => addProductToCart(CocaCola));
}
for (let i = 0; i < botonAddTocartSprite.length; i++) {
    botonAddTocartSprite[i].addEventListener("click", () => addProductToCart(Sprite));
}

function addProductToCart(product){
    if (product.cantidad == 0) {
        product.cantidad++,
        productsInCart.push(product)
    } else {
        product.cantidad++
    }
    cleanCarrito()
    refreshcart()
    renderCarrito()
}