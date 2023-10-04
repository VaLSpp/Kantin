document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        document.querySelector('#product-img > img').setAttribute('src', img)
    })
})

document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content')
    content.classList.toggle('active')
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'view all' : 'view less'
})

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
         old_price: '3.500',
         curr_price: '3.000'
     },
]

let product_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="product-details4.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
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
    })
}

renderProducts(products)