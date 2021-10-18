import { callMenu, home, contacts } from "./index";
import cafe1 from './cafe1.jpg';
import logopic from './logo.jpg';
import cafe2 from './cafe2.jpg';
import cafe3 from './cafe3.jpg';
import cafe4 from './cafe4.jpg';
import cafe5 from './cafe5.jpg';
import cafe6 from './cafe6.jpg';

let cafes = [cafe1, cafe2, cafe3, cafe4, cafe5, cafe6];

export function heading(){
  let navbar = document.createElement('div');
  navbar.setAttribute('class', 'navbar');

  let heading = document.createElement('h1');
  heading.textContent = "The Inbox";
  navbar.appendChild(heading);

  let ul = document.createElement('ul');
  let li1 = document.createElement('button');
  li1.id = 'home';
  li1.onclick = home;
  li1.textContent = "Home";
  let li2 = document.createElement('button');
  li2.id = 'menu';
  li2.onclick = callMenu;
  li2.textContent = "Menu";
  let li3 = document.createElement('button');
  li3.id = 'contact';
  li3.textContent = "Contact";
  li3.onclick = contacts;
  ul.setAttribute('class', 'navlinks');
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  navbar.appendChild(ul);
  return navbar;
}

export function contents(){
  let content = document.createElement('div');
  content.setAttribute('class', 'content');

  let description = document.createElement('div');
  
  let desHeading = document.createElement('h1');
  desHeading.setAttribute('class', 'dH');
  desHeading.textContent = "Description";
  description.appendChild(desHeading);
  description.setAttribute('class', 'contentBlocks');
 let dsP = document.createElement('p');
  dsP.style.fontStyle = 'Italic';
  dsP.textContent = "The Inbox's staff is working since 2010 to serve you and make your day. We have the best chefs to make delicious food for you. We give the best service for dates, meetings and family moments. Give us chance to organise your party and cherish the day. Please visit our contact option and call us for bookings. We will be happy to serve you today."
  description.appendChild(dsP);
  content.appendChild(description);

  let workingHours = document.createElement('div');
  workingHours.setAttribute('class', 'contentBlocks');
  let whH = document.createElement('h1');
  whH.setAttribute('class', 'wH');
  whH.textContent = "Hours";
  workingHours.appendChild(whH);
  let whT = document.createElement('div');
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  for(let i = 0;i<6;i++){
    let p = document.createElement('p');
    p.innerHTML = `${weekday[i]}: 9am-10pm`;
    whT.appendChild(p);
  }
  workingHours.appendChild(whT);
  content.appendChild(workingHours);

  let cities = document.createElement('div');
  cities.setAttribute('class', 'contentBlocks cities');
  let cH = document.createElement('h1');
  cH.setAttribute('class', 'contentBlocks cH');
  cH.textContent = "Cities";

  let cT = document.createElement('div');
  cT.setAttribute('class', 'cT');
  let city = ['Ahmedabad', 'Bangalore', 'Chennai', 'Goa', 'Jaipur', 'Noida'];
  for(let i = 0;i<city.length;i++){
    let p = document.createElement('p');
    p.innerHTML = `${city[i]}`;
    cT.appendChild(p);
  }
  cities.appendChild(cH);
  cities.appendChild(cT);
  content.appendChild(cities);

  let gallery = document.createElement('div');
  gallery.setAttribute('class', 'contentBlocks gallery');
  let gH = document.createElement('h1');
  gH.setAttribute('class', 'gH');
  gH.textContent = "Gallery";
  gallery.appendChild(gH);
  content.appendChild(gallery);
  // for(let i=0;i<6;i++){
  //   let img = document.createElement('img');
  //   img.setAttribute('class', 'galleryPics');
  //   // img.setAttribute('src', `../src/cafe${i}.jpg`);
  //   img.src = cafes[i];
  //   gallery.appendChild(img);
  // }


  let img = document.createElement('img');
  img.setAttribute('class', 'galleryPics');
  // img.setAttribute('src', `../src/cafe${i}.jpg`);
  img.src = cafe1;
  gallery.appendChild(img);
  let img2 = document.createElement('img');
  img2.setAttribute('class', 'galleryPics');
  // img.setAttribute('src', `../src/cafe${i}.jpg`);
  img2.src = cafe2;
  gallery.appendChild(img2);
  let img3 = document.createElement('img');
  img3.setAttribute('class', 'galleryPics');
  // img.setAttribute('src', `../src/cafe${i}.jpg`);
  img3.src = cafe3;
  gallery.appendChild(img3);
  let img4 = document.createElement('img');
  img4.setAttribute('class', 'galleryPics');
  // img.setAttribute('src', `../src/cafe${i}.jpg`);
  img4.src = cafe4;
  gallery.appendChild(img4);
  let img5 = document.createElement('img');
  img5.setAttribute('class', 'galleryPics');
  // img.setAttribute('src', `../src/cafe${i}.jpg`);
  img5.src = cafe5;
  gallery.appendChild(img5);
  let img6 = document.createElement('img');
  img6.setAttribute('class', 'galleryPics');
  // img.setAttribute('src', `../src/cafe${i}.jpg`);
  img6.src = cafe6;
  gallery.appendChild(img6);
  let log = document.createElement('img');
  log.setAttribute('class', 'galleryPics');
  // log.setAttribute('src', `../src/logo.jpg`);
  log.src = logopic;
  gallery.appendChild(log);

  return content;
}
