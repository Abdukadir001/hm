const catalog = [
    {
        name:'НеТуПи',
        img:'https://assets.asaxiy.uz/product/items/desktop/4500e4037738e13c0c18db508e18d4832022050413240621091dnqxk9ATba.jpg.webp',
        price:99000,
        description:'Какое-то описание'
    
    },
    {
        name:'Богатый папа, бедный папа ',
        img:'https://images.uzum.uz/cfp2dcfg49devoa8kh2g/t_product_540_high.jpg',
        price:800,
        oldPrice:1500,
        currency:'$',
        description:'Какое-то описание'
    
    },
    {
        name:'Surrounded by Idiots',
        img:'https://bci.kinokuniya.com/jsp/images/book-img/97817/97817850/9781785042188.JPG',
        price:750,
        description:'Какое-то описание'
    
    },

]

const cards = document.querySelector('.cards')

catalog.forEach(card => {
    cards.innerHTML +=   `
                 <div class="card">
                    <img src="${card.img }" alt="">
                    <h3>${card.name}</h3>
                    <p>${card.description}</p>
                    <s>${card.oldPrice} ${card.currency}</s>
                    <h4>${card.price}</h4>
                </div>
    `
})
