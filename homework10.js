export const products = [ 
  {
    id: 'moisturizing-mousse',
    name: 'Увлажняющий мусс',
    image: 'img/photo1.png',
    alt: 'Увлажняющий мусс',
    tag: 'для нормальной кожи',
    description: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
    compound: [ 'активные натуральные комплексы', 'витамины С, А, РР, В И Е', 'солнцезащитные компоненты' ],
    price: 2750 },
  {
    id: 'moisturizing-mask', 
    name: 'Увлажняющая маска', 
    image: 'img/photo2.png', 
    alt: 'Увлажняющая маска', 
    tag: 'для нормальной кожи', 
    description: 'Способствует удерживанию влаги в верхних слоях кожи.', 
    compound: ['воски', 'минералы', 'масла'], 
    price: 3500, },
  { 
    id: 'cleansing-gel', 
    name: 'Гель для умывания', 
    image: 'img/photo3.png', 
    alt: 'Гель для умывания', 
    tag: 'для нормальной кожи', 
    description: 'Интенсивно очищает, не повреждает защитный барьер кожи.', 
    compound: ['минералы', 'витамины С, А, РР, В И Е', 'солнцезащитные компоненты'], 
    price: 1650 }, 
  { 
    id: 'gift-set-1', 
    name: 'Подарочный набор №1', 
    image: 'img/photo4.png', 
    alt: 'Подарочный набор №1', 
    tag: 'для нормальной кожи', 
    description: 'Набор, состоящий из увлажняющего крема и маски.', 
    compound: ['воски', 'минералы', 'масла'], 
    price: 4750 }, 
  { 
    id: 'gift-set-5', 
    name: 'Подарочный набор №5', 
    image: 'img/photo5.png', 
    alt: 'Подарочный набор №5', 
    tag: 'для нормальной кожи', 
    description: 'Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.', 
    compound: ['воски', 'минералы', 'масла'], 
    price: 7520 }
  ];
 console.log('Загружено товаров:', products.length); console.log(products);
  function renderCatalog(dataArray) { 
   } renderCatalog(products);

const productDescriptions = products.reduce((accumulator, currentProduct) => {

accumulator[currentProduct.name] = currentProduct.description;

  return accumulator;
}, {});

console.log(productDescriptions);

function getCardsCount() {
  let count;
    while (true) {
     const input = prompt("Сколько карточек отобразить? От 1 до 5");
    if (input === null)
    {
    return products.length;
    }
    count = Number(input);
    if (!isNaN(count) && count >= 1 && count <= 5)
    {
    return count;
    }
    else 
    { 
    alert("Ошибка! Введите целое число от 1 до 5.");
    }
  }
}
        function renderProducts(dataArray, limit) {
           const container = document.querySelector('.products');
           if (!container) return;
          container.innerHTML = '';
        const cardsToRender = dataArray.slice(0, limit);
        const htmlString = cardsToRender.map(product => `
          <li class="product_item card"> 
          <img src="${product.image}" 
          alt="${product.alt}"
          width="200" height="200" 
          class="card_image"> 
          <p class="card_tag">${product.tag}</p>
          <h2 class="card_name">${product.name}</h2> 
          <div class="card_text"> 
          <p>${product.description}</p> 
          </div>
          <div class="card_compound compound">
          <span class="compound_name">Состав: </span>
          <ul class="compound_list"> ${product.compound.map(item =>
          `<li>${item}</li>`).join('')} 
          </ul>
          </div> <div class="card_price">
          <b>Цена:</b> <span>${product.price} ₽</span>
          </div>
          <button class="button">Купить</button> 
          </li> `).join('');
          container.insertAdjacentHTML('beforeend', htmlString); }
          document.addEventListener('DOMContentLoaded', () => { 
          const amount = getCardsCount();
          renderProducts(products, amount); });