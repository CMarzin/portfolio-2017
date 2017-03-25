import data from "../data/data.json";

const d = data;
const about = data.about;

console.log(d);
console.log(about);

let source = document.querySelector('#bethedrop');
let page_about = document.querySelector('#about');

let content = MyApp.templates.bethedrop(d);
let content_about = MyApp.templates.about(about);

// console.log(content_about);
// console.log(content);

// source.innerHTML = content;
page_about.innerHTML = content_about;
