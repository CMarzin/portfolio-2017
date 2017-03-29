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
let container_svg = document.querySelector('.container');

console.log(container, rect1);

let see_project = document.querySelector('.container__button--open');
let container_title = document.querySelector('.container__title--flex');
let arrows = document.querySelectorAll('.container__arrow');


see_project.addEventListener('click', function() {
    rect1.classList.add('transition');
    rect2.classList.add('transition');
    rect3.classList.add('transition');

    setTimeout(() => {
        rect1.setAttribute("style", "transform: translateX(0px) translateY(-210px);-webkit-transform: translateY(-210px) translateX(0px);-moz-transform: translateY(-210px) translateX(0px)");
        setTimeout(() => {
            rect2.setAttribute("style", "transform: translateX(0px) translateY(-200px);-webkit-transform: translateY(0px) translateX(-200px);-moz-transform: translateY(0px) translateX(-200px)");
            setTimeout(() => {
                container_title.classList.add('container__title--flex-hide');
                rect3.setAttribute("style", "transform: translateX(300px) translateY(0px);-webkit-transform: translateY(0px) translateX(300px);-moz-transform: translateY(0px) translateX(300px)");
                arrows[0].classList.add('container__arrow--hide-prev');
                arrows[0].classList.remove('container__arrow--prev');
                arrows[1].classList.add('container__arrow--hide-next');
                arrows[1].classList.remove('container__arrow--next');
                setTimeout(() => {
                    container_svg.classList.add('container--hide');
                }, 1000);
            }, 400);
        }, 300);
    }, 200);
});


document.body.onmousemove = function(e) {

    let axhard = -(window.innerWidth / 2 - e.pageX) / 45;
    let ayhard = (window.innerHeight / 2 - e.pageY) / 45;

    let axlight = -(window.innerWidth / 2 - e.pageX) / 35;
    let aylight = (window.innerHeight / 2 - e.pageY) / 35;

    rect1.setAttribute("style", "transform: translateX(" + axhard + "px) translateY(" + aylight + "px);-webkit-transform: translateY(" + aylight + "px) translateX(" + axhard + "px);-moz-transform: translateY(" + aylight + "px) translateX(" + axhard + "px)");
    rect2.setAttribute("style", "transform: translateX(" + axhard + "px) translateY(" + aylight + "px);-webkit-transform: translateY(" + aylight + "px) translateX(" + axhard + "px);-moz-transform: translateY(" + aylight + "px) translateX(" + axhard + "px)");
    rect3.setAttribute("style", "transform: translateX(" + axhard + "px) translateY(" + aylight + "px);-webkit-transform: translateY(" + aylight + "px) translateX(" + axhard + "px);-moz-transform: translateY(" + aylight + "px) translateX(" + axhard + "px)");
}
