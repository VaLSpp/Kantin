let slide_index = 0
let slide_play = true
const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementsByClassName("latest-products")
    const product = document.querySelector("latest-products")

    for(var i=0; i < product.length; i++){
        let match = storeitems[i].getElementsByClassName('latest-products')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTM
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider control

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

let products = [
    {
        name: 'Banana Coklat',
        image1: './gambar/banana coklat.webp',
        image2: './gambar/banana coklat.webp',
        old_price: '2.500',
        curr_price: '2.000/pcs'
    },
    {
        name: 'Makaroni Pedas',
        image1: './gambar/makaroni.jpg',
        image2: './gambar/makaroni.jpg',
        old_price: '2.000',
        curr_price: '1.500/pcs'
    },
    {
        name: 'Bola Susu',
        image1: './gambar/bola susu.jpg',
        image2: './gambar/bola susu.jpg',
        old_price: '1.500',
        curr_price: '1.000/pcs'
    },
    {
        name: 'Banana Nugget',
        image1: './gambar/banana nugget.jpg',
        image2: './gambar/banana nugget.jpg',
        old_price: '1.500',
        curr_price: '1.000/pcs'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                    <a href="product-details.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                         <a href="product-details.html"<a/>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <a href="product-details.html"<a/>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})