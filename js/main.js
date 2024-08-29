const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cartWrapper = document.querySelector('.content-main_list')

const cartArray = [
    {
        id: 0,
        title: 'Первый товар',
        price: '170 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/card-image.png'
    },
    {
        id: 1,
        title: 'Второй товар',
        price: '171 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/card-image.png'
    },
    {
        id: 2,
        title: 'Третий товар',
        price: '172 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/card-image.png'
    },
    {
        id: 3,
        title: 'Четвертый товар',
        price: '173 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/card-image.png'
    },
    {
        id: 4,
        title: 'Пятый товар',
        price: '174 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/card-image.png'
    },
    {
        id: 5,
        title: 'Шестой товар',
        price: '175 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/card-image.png'
    },

];
const render = (cardList) => {
    cartWrapper.innerHTML = ''
    cardList.forEach((item) => {
        cartWrapper.insertAdjacentHTML('beforeend', `
            <a href="/product.html" class="content-main_list-item">
                <div class="content-main_list-item--img">
                  <img src="${item.img}" alt="card" />
                </div>
                <h5 class="content-main_list-item--title">
                 ${item.title}
                </h5>
                <strong class="content-main_list-item--price">${item.price}</strong>
                <div class="content-main_list-item--desc-box">
                  <span class="content-main_list-item--desc">
                  ${item.address}
                  </span>
                  <span class="content-main_list-item--desc">${item.date}</span>
                </div>
            </a>
    `)

    })
}
const filterArray = (array, value) => {
    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value)
    })
}

cartWrapper.style.justifyContent = 'flex-start';
cartWrapper.style.gap = '30px';
render(cartArray)
searchBtn.addEventListener('click', () => {
    render(filterArray(cartArray, searchInput.value))
})

