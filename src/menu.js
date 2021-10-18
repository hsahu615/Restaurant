

export function menu(){
  clear();
  let content = document.querySelector('.content');
  let menuNav = document.createElement('div');
  menuNav.setAttribute('class', 'menuNav');
  let btn1 = document.createElement('button');
  btn1.textContent = "Pizza";
  btn1.setAttribute('class', 'menuButton');
  let btn2 = document.createElement('button');
  btn2.textContent = "Burger";
  btn2.setAttribute('class', 'menuButton');
  let btn3 = document.createElement('button');
  btn3.textContent = "Beverage";
  btn3.setAttribute('class', 'menuButton');

  let menuDiv = document.createElement('div');
  menuDiv.setAttribute('class', 'menuDiv');
  content.appendChild(menuNav);
  content.appendChild(menuDiv);

  btn1.onclick = pizza;
  btn2.onclick = burger;
  btn3.onclick = beverage;
  pizza();

  menuNav.appendChild(btn1);
  menuNav.appendChild(btn2);
  menuNav.appendChild(btn3);
}

function clear(){
  let cont = document.querySelector('.content');
  cont.innerHTML = "";
}


function pizza(){
  let menuDiv = document.querySelector('.menuDiv');
  menuDiv.innerHTML = "";

  let nameTag = ["Margherita", "Farmhouse", "Peppy Paneer", "Veg Extravaganza", "Veggie Paradise", "Cheese & Corn", "Pepper Barbeque Chicken", "Chicken Sausage", "The Cheese Dominator", "The 4 Cheese Pizza", "Delux Veggie", "New Fresh Veggie", "Indi Tandoori Paneer", "Creamy Tomato Pasta Pizza", "Moroccan Spice Pasta Pizza", "Chicken Fiesta"];

  let imageSrc = ["new_margherita_2502.jpg", "farmhouse.png", "new_peppy_paneer.jpg", "new_veg_extravaganza.jpg", "new_veggie_paradise.jpg", "new_cheese_n_corn.jpg", "new_pepper_barbeque_chicken.jpg", "new_chicken_sausage.jpg", "PIZ0170.jpg", "PIZ0171.jpg", "new_deluxe_veggie.jpg", "new_fresh_veggie.jpg", "IndianTandooriPaneer.jpg", "CreamyTomatoPPVG_N.jpg", "MoroccanSpicePPVG_N.jpg", "new_chicken_fiesta.jpg"];

  let priceTag = [199, 399, 399, 459, 399, 309, 399, 339, 579, 579, 459, 339, 339, 459, 399, 309, 459];

  for(let i = 0;i<nameTag.length;i++){
    let div = document.createElement('div');
    div.setAttribute('class','food-box');
    let img = document.createElement('img');
    img.src = `https://images.dominos.co.in/${imageSrc[i]}`;
    img.id = "pizzaPic";
    let name = document.createElement('p');
    name.id = 'nameTag';
    name.textContent = `${nameTag[i]}`;
    let price = document.createElement('p');
    price.id = 'priceTag';
    price.textContent = `Price: ${priceTag[i]}`;
    menuDiv.appendChild(div);
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);
  }
}

function burger(){
  let menuDiv = document.querySelector('.menuDiv');
  menuDiv.innerHTML = "";

  let nameTag = ["Crispy Veg Double Patty", "Crispy Chicken Double Patty", "Veg Whopper", "Chicken Whopper", "Veg Peri Peri Whopper", "Chicken Peri Peri Whopper", "Crispy Veg Burger", "Mutton Peri Peri Whopper", "Cheese Meltdown", "Fiery Chicken Burger"];

  let imageSrc = ["2x_web_20210215055351180714_482x264jpg", "2x_web_20210215055235287298_482x264jpg", "2x_web_20210215055637174502_482x264jpg", "2x_web_20210215055533662092_482x264jpg", "2x_web_20210820040218595885_482x264jpg", "2x_web_20210820040508490180_482x264jpg", "2x_web_CrispyVeg482x264.jpg", "2x_web_20210820040547630542_482x264jpg", "2x_web_20201117120432546466_482x264jpg", "2x_web_20210430080827764183_482x264jpg"];

  let priceTag = [150, 238, 298, 358, 199, 209, 55, 339, 169, 179];

  for(let i = 0;i<nameTag.length;i++){
    let div = document.createElement('div');
    div.setAttribute('class','food-box');
    let img = document.createElement('img');
    img.src = `https://burgerking-image.s3.amazonaws.com/products/PLP/web/${imageSrc[i]}`;
    img.id = "pizzaPic";
    let name = document.createElement('p');
    name.id = 'nameTag';
    name.textContent = `${nameTag[i]}`;
    let price = document.createElement('p');
    price.id = 'priceTag';
    price.textContent = `Price: ${priceTag[i]}`;
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);
    menuDiv.appendChild(div);
  }

}


function beverage(){
  let menuDiv = document.querySelector('.menuDiv');
  menuDiv.innerHTML = "";

  let nameTag = ['Cafe Latter', 'Classic Cappuccino', 'Eye-Opener Espresso', 'Filter Coffee', 'Inverted Cappuccino', 'Rasmalai Smoothie', 'Vanilla Cappuccino', 'Vanilla Lattee', 'Alphonso Mango Milkshake', 'Classic Strawberry Milkshake', 'Cocoa Cookie Milkshake', 'Kesari Delight Milkshake', 'Cafe Frappe', 'Crunchy Frappe', 'Dark Frappe', "Devil's Own", "Kaapi Nirvana", 'Tropical Iceberg', 'Vegan Shake'];

  let imageSrc = ["Cafe-Latte-01_0.png", "Cappuccino_8.png", "Espresso_2.png", "Filter-Coffee_1.png", "Inverted-Cappuccino_1.png", "Rasmalai-smoothie_2.png", "Cappuccino_4.png", "Vanilla-Latte-1_0.png", "mango.jpg", "500x378-strawberry_0.jpg", "chocolate.jpg", "kesar.jpg", "Cafe-frappe_2.png", 
  "Crunchy-Frappe_2.png", "Dark-Frappe_2.png", "Devils-Own_2.png", "Kaapi-Nirvana_2.png", "Tropical-Iceberg_2.png", "Vegan-Shake_2.png"];

  let priceTag = [79, 99, 95, 89, 119, 139, 119, 79, 149, 149, 129, 139, 99, 89, 109, 119, 99, 89, 139];

  for(let i = 0;i<nameTag.length;i++){
    let div = document.createElement('div');
    div.setAttribute('class','food-box');
    let img = document.createElement('img');
    img.src = `https://www.cafecoffeeday.com/sites/default/files/${imageSrc[i]}`;
    img.id = "pizzaPic";
    let name = document.createElement('p');
    name.id = 'nameTag';
    name.textContent = `${nameTag[i]}`;
    let price = document.createElement('p');
    price.id = 'priceTag';
    price.textContent = `Price: ${priceTag[i]}`;
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);
    menuDiv.appendChild(div);
  }
}
