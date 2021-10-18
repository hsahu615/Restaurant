import { heading, contents } from "./home";
import { menu } from './menu';
import { contact } from './contact';
import './style.css';



const component = function(){
  const headings = heading;
  const contentss = contents;
  return {headings, contentss};
}


// Creating default page by appending navbar and home content.
document.body.appendChild(component().headings());
document.body.appendChild(component().contentss());

// Function if clicked on home
export function home(){
  let cont = document.querySelector('.content');
  document.body.removeChild(cont);
  document.body.appendChild(component().contentss());
}
home();

// function if clicked on Menu.
export function callMenu(){
  menu();
}

export function contacts(){
  contact();
}