
import logopic from './logo.jpg';
import instapic from './insta.png';
import facebookpic from './facebook.png';
import snappic from './snapchat.png';
import mappic from './map.png';




export function contact(){
  clear();
  let content = document.querySelector('.content');

  let logo = document.createElement('img');
  // logo.src = "https://i.ibb.co/ydxzZ80/logo.jpg";
  logo.src = logopic;



  let link = document.createElement('div');

  let insta = document.createElement('img');
  insta.id = "contactIcon";
  // insta.src = "https://i.ibb.co/5GRCdg9/insta.png";
  insta.src = instapic;
  link.appendChild(insta);

  let facebook = document.createElement('img');
  facebook.id = "contactIcon";
  // facebook.src = "https://i.ibb.co/jGftSnF/facebook.png";
  facebook.src = facebookpic;
  link.appendChild(facebook);

  let snap = document.createElement('img');
  snap.id = "contactIcon";
  // snap.src = "https://i.ibb.co/VjGjXFj/snapchat.png";
  snap.src = snappic;
  link.appendChild(snap);

  let map = document.createElement('div');
  map.id = "map";
  let direction = document.createElement('a');
  direction.href = "https://www.google.com/maps/dir//Inbox+cafe+and+lounge,+Rajapur,+Pocket+50,+Sector+9,+Rohini,+Delhi,+110085/@28.7114625,77.0857723,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d017efb0ab6e9:0x4d88486a2214b324!2m2!1d77.1249677!2d28.7191796!3e0";
  direction.target = '_blank';
  let mapdir = document.createElement('img');
  // mapdir.src = "https://i.ibb.co/PzGwX3R/map.png";
  mapdir.src = mappic;
  mapdir.id = "mappic";
  direction.appendChild(mapdir);
  map.appendChild(direction);

  let address = document.createElement('p');
  address.textContent = "Inbox Restaurant and lounge, Rajapur, Pocket 50, Sector 9, Rohini, Delhi, 110085."
  address.id = "address";

  let phone1 = document.createElement('a');
  phone1.textContent = "Restaurant Manager: +91-98877-72749";
  phone1.href = 'Tel: 9887772749';
  let phone2 = document.createElement('a');
  phone2.textContent = "Chief Chef: +91-74258-39649";
  phone2.href = 'Tel: 7425839649';


  content.appendChild(logo);
  content.appendChild(link);
  content.appendChild(map);
  content.appendChild(address);
  content.appendChild(phone1);
  content.appendChild(phone2);
}

function clear(){
  let cont = document.querySelector('.content');
  cont.innerHTML = "";
}
