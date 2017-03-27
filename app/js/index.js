import data from "../data/data.json";

const d = data;
const about = data.about;

console.log(d);

let project_choose = document.querySelector('#project__choose');
let project_desc = document.querySelector('#project__desc');
let page_about = document.querySelector('#about');

let content_choose = MyApp.templates.projectChoose(d);
let content_desc = MyApp.templates.projectDesc(d);
let content_about = MyApp.templates.about(about);

// console.log(content_about);
// console.log(content);

project_choose.innerHTML = content_choose;
// project_desc.innerHTML = content_desc;
// page_about.innerHTML = content_about;

let rect1 = document.querySelector('.rect1');
let rect2 = document.querySelector('.rect2');
let rect3 = document.querySelector('.rect3');
let rect4 = document.querySelector('.rect4');

let container = document.querySelector('#project__choose');

console.log(container, rect1);


document.body.onmousemove = function(e) {

   let axhard = -(window.innerWidth/2- e.pageX)/45;
   let ayhard = (window.innerHeight/2- e.pageY)/45;

   let axlight = -(window.innerWidth/2- e.pageX)/35;
   let aylight = (window.innerHeight/2- e.pageY)/35;

   rect1.setAttribute("style", "transform: translateX("+axhard+"px) translateY("+aylight+"px);-webkit-transform: translateY("+aylight+"px) translateX("+axhard+"px);-moz-transform: translateY("+aylight+"px) translateX("+axhard+"px)");
   rect2.setAttribute("style", "transform: translateX("+axhard+"px) translateY("+aylight+"px);-webkit-transform: translateY("+aylight+"px) translateX("+axhard+"px);-moz-transform: translateY("+aylight+"px) translateX("+axhard+"px)");
   rect3.setAttribute("style", "transform: translateX("+axhard+"px) translateY("+aylight+"px);-webkit-transform: translateY("+aylight+"px) translateX("+axhard+"px);-moz-transform: translateY("+aylight+"px) translateX("+axhard+"px)");
}
