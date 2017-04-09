import data from "../data/data.json";

const d = data;
const about = data.about;

let project_choose = document.querySelector('#project__choose');
let project_desc = document.querySelector('#project__desc');
let page_about = document.querySelector('#about');

let content_choose = MyApp.templates.projectChoose(d);
let content_desc = MyApp.templates.projectDesc(d);
let content_about = MyApp.templates.about(about);

// Insert json to html
project_choose.innerHTML = content_choose;
project_desc.innerHTML = content_desc;
page_about.innerHTML = content_about;

// Select mask svg
let rect1 = document.querySelector('.rect1');
let rect2 = document.querySelector('.rect2');
let rect3 = document.querySelector('.rect3');
let rect4 = document.querySelector('.rect4');

let container = document.querySelector('#project__choose');
let container_svg = document.querySelector('.container');

let see_project = document.querySelectorAll('.container__button--open');
let container_title = document.querySelectorAll('.container__title--flex');
let container__arrows = document.querySelector('.container__arrows');
let container__button = document.querySelector('.container__button');
let arrows = document.querySelectorAll('.container__arrow');
let arrow_left = document.querySelector('.container__arrow--prev');
let arrow_right = document.querySelector('.container__arrow--next');
let button_prev = document.querySelector('.container__box--prev');
let button_next = document.querySelector('.container__box--next');

let bgwhite_left = document.querySelector('.projects__project--left-bg--white');
let bgblue_left = document.querySelector('.projects__project--left-bg--blue');
let bgwhite_right = document.querySelector('.projects__project--right-bg--white');

let about_bgwhite_left = document.querySelector('.about__left-bg--white');
let about_bgblue_left = document.querySelector('.about__left-bg--blue');
let about_bgwhite_right = document.querySelector('.about__right-bg--white');

let choose_img = document.querySelectorAll('.clip-rectangle');
let desc_project = document.querySelectorAll('.projects__project');
let desc_img = document.querySelectorAll('.projects__project--img');

// Menu
let menu_about = document.querySelector('.menu__about');
let menu_home = document.querySelector('.menu__logo');

let count = 0;
let situation = 0;

/*
 * Anim mask svg
 *
 */

const move_mask = (e) => {
    let axhard = -(window.innerWidth / 2 - e.pageX) / 45;
    let ayhard = (window.innerHeight / 2 - e.pageY) / 45;

    let axlight = -(window.innerWidth / 2 - e.pageX) / 35;
    let aylight = (window.innerHeight / 2 - e.pageY) / 35;

    rect1.setAttribute("style", "transform: translateX(" + axhard + "px) translateY(" + aylight + "px);-webkit-transform: translateY(" + aylight + "px) translateX(" + axhard + "px);-moz-transform: translateY(" + aylight + "px) translateX(" + axhard + "px)");
    rect2.setAttribute("style", "transform: translateX(" + axhard + "px) translateY(" + aylight + "px);-webkit-transform: translateY(" + aylight + "px) translateX(" + axhard + "px);-moz-transform: translateY(" + aylight + "px) translateX(" + axhard + "px)");
    rect3.setAttribute("style", "transform: translateX(" + axhard + "px) translateY(" + aylight + "px);-webkit-transform: translateY(" + aylight + "px) translateX(" + axhard + "px);-moz-transform: translateY(" + aylight + "px) translateX(" + axhard + "px)");
}

document.body.onmousemove = move_mask;


//reactive scroll anim
document.querySelector('.menu__logo').addEventListener('click', () => {
    document.body.onmousemove = move_mask;
});


console.log(see_project);

for (const project of see_project) {

    // Launch anim
    project.addEventListener('click', () => {
      event.stopImmediatePropagation();

        situation = 1;

        switch (count) {
            case 0:
                container_title[0].classList.remove('show_title');
                desc_img[0].classList.remove('hide_project--img');
                desc_img[1].classList.add('hide_project--img');
                desc_img[2].classList.add('hide_project--img');
                desc_img[3].classList.add('hide_project--img');
                desc_img[4].classList.add('hide_project--img');
                // Hide description project
                desc_project[4].classList.add('hide_project--desc');
                desc_project[0].classList.remove('hide_project--desc');
                desc_project[2].classList.add('hide_project--desc');
                break;
            case 1:
                //hide button right
                button_prev.classList.remove('container__box--none');
                container_title[1].classList.remove('show_title');
                desc_img[0].classList.add('hide_project--img');
                desc_img[1].classList.remove('hide_project--img');
                desc_img[2].classList.add('hide_project--img');
                desc_img[3].classList.add('hide_project--img');
                desc_img[4].classList.add('hide_project--img');
                // Hide description project
                desc_project[0].classList.add('hide_project--desc');
                desc_project[1].classList.remove('hide_project--desc');
                desc_project[2].classList.add('hide_project--desc');
                break;
            case 2:
                //hide button right
                button_prev.classList.remove('container__box--none');
                container_title[2].classList.remove('show_title');
                desc_img[0].classList.add('hide_project--img');
                desc_img[1].classList.add('hide_project--img');
                desc_img[2].classList.remove('hide_project--img');
                desc_img[3].classList.add('hide_project--img');
                desc_img[4].classList.add('hide_project--img');
                // Hide description project
                desc_project[1].classList.add('hide_project--desc');
                desc_project[2].classList.remove('hide_project--desc');
                desc_project[3].classList.add('hide_project--desc');
                break;
            case 3:
                //hide button right
                button_prev.classList.remove('container__box--none');
                container_title[3].classList.remove('show_title');
                desc_img[0].classList.add('hide_project--img');
                desc_img[1].classList.add('hide_project--img');
                desc_img[2].classList.add('hide_project--img');
                desc_img[3].classList.remove('hide_project--img');
                desc_img[4].classList.add('hide_project--img');
                // Hide description project
                desc_project[2].classList.add('hide_project--desc');
                desc_project[3].classList.remove('hide_project--desc');
                desc_project[4].classList.add('hide_project--desc');
                break;
            case 4:
                //hide button right
                button_prev.classList.remove('container__box--none');
                button_next.classList.add('container__box--none');
                container_title[4].classList.remove('show_title');
                desc_img[0].classList.add('hide_project--img');
                desc_img[1].classList.add('hide_project--img');
                desc_img[2].classList.add('hide_project--img');
                desc_img[3].classList.add('hide_project--img');
                desc_img[4].classList.remove('hide_project--img');
                // Hide description project
                desc_project[3].classList.add('hide_project--desc');
                desc_project[4].classList.remove('hide_project--desc');
                desc_project[0].classList.add('hide_project--desc');
                break;
        }

        // hide container title
        for (const title of container_title) {
            title.classList.add('container__title--flex-hide');
        }

        // disable event on scroll
        document.body.onmousemove = null

        rect1.classList.add('transition');
        rect2.classList.add('transition');
        rect3.classList.add('transition');

        rect1.setAttribute("style", "transform: translateX(0px) translateY(-210px);-webkit-transform: translateY(-210px) translateX(0px);-moz-transform: translateY(-210px) translateX(0px)");
        setTimeout(() => {
            rect2.setAttribute("style", "transform: translateX(0px) translateY(-200px);-webkit-transform: translateY(0px) translateX(-200px);-moz-transform: translateY(0px) translateX(-200px)");
            setTimeout(() => {
                rect3.setAttribute("style", "transform: translateX(300px) translateY(0px);-webkit-transform: translateY(0px) translateX(300px);-moz-transform: translateY(0px) translateX(300px)");
                arrows[0].classList.add('container__arrow--hide-prev');
                arrows[0].classList.remove('container__arrow--prev');
                arrows[1].classList.add('container__arrow--hide-next');
                arrows[1].classList.remove('container__arrow--next');
                setTimeout(() => {
                    container_svg.classList.add('container--hide');
                    project_choose.classList.add('display--hide');
                    container__arrows.classList.add('display--hide');
                    project_desc.classList.remove('display--hide');
                    container__button.classList.remove('display--hide');
                    setTimeout(() => {
                        bgwhite_left.classList.add('projects__project--left-bg--white--hide');
                        bgwhite_right.classList.add('projects__project--right-bg--white--hide');
                        bgblue_left.classList.add('projects__project--left-bg--blue--hide');
                    }, 500);
                }, 400);
            }, 200);
        }, 300);
    });
}

button_next.addEventListener('click', () => {

    bgblue_left.classList.remove('projects__project--left-bg--blue--hide');
    bgwhite_right.classList.remove('projects__project--right-bg--white--hide');

    count++;

    if (count > 4) {
        count = 0;
    }

    setTimeout(() => {
        bgblue_left.classList.add('projects__project--left-bg--blue--hide');
        bgwhite_right.classList.add('projects__project--right-bg--white--hide');
        switch (count) {
            case 0:
                // Image project
                desc_img[0].classList.remove('hide_project--img');
                desc_img[1].classList.add('hide_project--img');
                desc_img[2].classList.add('hide_project--img');
                desc_img[3].classList.add('hide_project--img');
                desc_img[4].classList.add('hide_project--img');
                // Desc project
                desc_project[0].classList.add('hide_project--desc');
                desc_project[1].classList.remove('hide_project--desc');
                desc_project[2].classList.add('hide_project--desc');
                break;
            case 1:
                //hide button right
                button_prev.classList.remove('container__box--none');
                // Image project
                desc_img[0].classList.add('hide_project--img');
                desc_img[1].classList.remove('hide_project--img');
                desc_img[2].classList.add('hide_project--img');
                desc_img[3].classList.add('hide_project--img');
                desc_img[4].classList.add('hide_project--img');
                // Desc project
                desc_project[0].classList.add('hide_project--desc');
                desc_project[1].classList.remove('hide_project--desc');
                desc_project[2].classList.add('hide_project--desc');
                break;
            case 2:
                // Image project
                desc_img[0].classList.add('hide_project--img');
                desc_img[1].classList.add('hide_project--img');
                desc_img[2].classList.remove('hide_project--img');
                desc_img[3].classList.add('hide_project--img');
                desc_img[4].classList.add('hide_project--img');
                // Desc project
                desc_project[1].classList.add('hide_project--desc');
                desc_project[2].classList.remove('hide_project--desc');
                desc_project[3].classList.add('hide_project--desc');
                break;
            case 3:
                // Image project
                desc_img[0].classList.add('hide_project--img');
                desc_img[1].classList.add('hide_project--img');
                desc_img[2].classList.add('hide_project--img');
                desc_img[3].classList.remove('hide_project--img');
                desc_img[4].classList.add('hide_project--img');
                // Desc project
                desc_project[2].classList.add('hide_project--desc');
                desc_project[3].classList.remove('hide_project--desc');
                desc_project[4].classList.add('hide_project--desc');
                break;
            case 4:
                // hide button left
                button_next.classList.add('container__box--none');
                // Image project
                desc_img[0].classList.add('hide_project--img');
                desc_img[1].classList.add('hide_project--img');
                desc_img[2].classList.add('hide_project--img');
                desc_img[3].classList.add('hide_project--img');
                desc_img[4].classList.remove('hide_project--img');
                // Desc project
                desc_project[3].classList.add('hide_project--desc');
                desc_project[4].classList.remove('hide_project--desc');
                desc_project[0].classList.add('hide_project--desc');
                break;
        }
    }, 500);

    event.stopImmediatePropagation();
    console.log(situation, "button +");

});

button_prev.addEventListener('click', () => {

    bgblue_left.classList.remove('projects__project--left-bg--blue--hide');
    bgwhite_right.classList.remove('projects__project--right-bg--white--hide');

    count--;

    if (count < 0) {
        count = 4;
    }

    setTimeout(() => {
        bgblue_left.classList.add('projects__project--left-bg--blue--hide');
        bgwhite_right.classList.add('projects__project--right-bg--white--hide');
        switch (count) {
            case 0:
                // Image project
                desc_img[0].classList.remove('hide_project--img');
                desc_img[1].classList.add('hide_project--img');
                desc_img[2].classList.add('hide_project--img');
                desc_img[3].classList.add('hide_project--img');
                desc_img[4].classList.add('hide_project--img');
                // Desc project
                desc_project[0].classList.remove('hide_project--desc');
                desc_project[1].classList.add('hide_project--desc');
                break;
            case 1:
                // Image project
                desc_img[0].classList.add('hide_project--img');
                desc_img[1].classList.remove('hide_project--img');
                desc_img[2].classList.add('hide_project--img');
                desc_img[3].classList.add('hide_project--img');
                desc_img[4].classList.add('hide_project--img');
                // Desc project
                desc_project[0].classList.add('hide_project--desc');
                desc_project[1].classList.remove('hide_project--desc');
                desc_project[2].classList.add('hide_project--desc');
                break;
            case 2:
                // Image project
                desc_img[0].classList.add('hide_project--img');
                desc_img[1].classList.add('hide_project--img');
                desc_img[2].classList.remove('hide_project--img');
                desc_img[3].classList.add('hide_project--img');
                desc_img[4].classList.add('hide_project--img');
                // Desc project
                desc_project[1].classList.add('hide_project--desc');
                desc_project[2].classList.remove('hide_project--desc');
                desc_project[3].classList.add('hide_project--desc');
                break;
            case 3:
                // show button left
                button_next.classList.remove('container__box--none');
                // Image project
                desc_img[0].classList.add('hide_project--img');
                desc_img[1].classList.add('hide_project--img');
                desc_img[2].classList.add('hide_project--img');
                desc_img[3].classList.remove('hide_project--img');
                desc_img[4].classList.add('hide_project--img');
                // Desc project
                desc_project[2].classList.add('hide_project--desc');
                desc_project[3].classList.remove('hide_project--desc');
                desc_project[4].classList.add('hide_project--desc');
                break;
            case 4:
                // Image project
                desc_img[0].classList.add('hide_project--img');
                desc_img[1].classList.add('hide_project--img');
                desc_img[2].classList.add('hide_project--img');
                desc_img[3].classList.add('hide_project--img');
                desc_img[4].classList.remove('hide_project--img');
                // Desc project
                desc_project[3].classList.add('hide_project--desc');
                desc_project[4].classList.remove('hide_project--desc');
                desc_project[0].classList.add('hide_project--desc');
                break;
        }
    }, 500);
    event.stopImmediatePropagation();
    console.log(situation, "button -");
});

// Arrow Left
arrows[0].addEventListener('click', () => {

    count--;

    if (count < 0) {
        count = 4;
    }


    switch (count) {
        case 0:
            //show arrow left
            arrow_left.classList.add('container__arrow--none');
            // Image project
            choose_img[0].classList.remove('clip-rectangle--hide-left');
            choose_img[1].classList.add('clip-rectangle--hide-right');
            // Title project
            container_title[0].classList.remove('hide_title');
            container_title[1].classList.add('hide_title');
            container_title[1].classList.remove('show_title');
            // Desc project
            desc_project[4].classList.add('hide_project--desc');
            desc_project[0].classList.remove('hide_project--desc');
            desc_project[1].classList.add('hide_project--desc');
            break;
        case 1:
            // Image project
            choose_img[0].classList.add('clip-rectangle--hide-left');
            choose_img[1].classList.remove('clip-rectangle--hide-left');
            choose_img[2].classList.add('clip-rectangle--hide-right');
            // Title project
            container_title[1].classList.add('show_title');
            container_title[1].classList.remove('hide_title');
            container_title[2].classList.add('hide_title');
            container_title[2].classList.remove('show_title');
            // Desc project
            desc_project[0].classList.add('hide_project--desc');
            desc_project[1].classList.remove('hide_project--desc');
            desc_project[2].classList.add('hide_project--desc');
            break;
        case 2:
            // Image project
            choose_img[0].classList.add('clip-rectangle--hide-left');
            choose_img[2].classList.remove('clip-rectangle--hide-left');
            choose_img[3].classList.add('clip-rectangle--hide-right');
            // Title project
            container_title[2].classList.add('show_title');
            container_title[2].classList.remove('hide_title');
            container_title[3].classList.add('hide_title');
            container_title[3].classList.remove('show_title');
            // Desc project
            desc_project[1].classList.add('hide_project--desc');
            desc_project[2].classList.remove('hide_project--desc');
            desc_project[3].classList.add('hide_project--desc');
            break;
        case 3:
            //hide arrow right
            arrow_right.classList.remove('container__arrow--none');
            // Image project
            choose_img[1].classList.add('clip-rectangle--hide-left');
            choose_img[3].classList.remove('clip-rectangle--hide-left');
            choose_img[4].classList.add('clip-rectangle--hide-right');
            // Title project
            container_title[3].classList.add('show_title');
            container_title[3].classList.remove('hide_title');
            container_title[4].classList.add('hide_title');
            container_title[4].classList.remove('show_title');
            // Desc project
            desc_project[2].classList.add('hide_project--desc');
            desc_project[3].classList.remove('hide_project--desc');
            desc_project[4].classList.add('hide_project--desc');
            break;
        case 4:
            // Image project
            choose_img[2].classList.add('clip-rectangle--hide-left');
            choose_img[3].classList.remove('clip-rectangle--hide-left');
            // choose_img[4].classList.add('clip-rectangle--hide-right');
            // Title project
            container_title[4].classList.remove('show_title');
            container_title[4].classList.add('hide_title');
            // Desc project
            desc_project[2].classList.add('hide_project--desc');
            desc_project[3].classList.remove('hide_project--desc');
            desc_project[4].classList.add('hide_project--desc');
            break;
    }

    event.stopImmediatePropagation();
    console.log(situation, "arrow -");

});

// Arrow Right
arrows[1].addEventListener('click', () => {

    count++;

    if (count > 4) {
        count = 0;
    }

    switch (count) {
        case 0:
            // Image project
            choose_img[0].classList.remove('clip-rectangle--hide-left');
            choose_img[1].classList.add('clip-rectangle--hide-right');
            // Title project
            container_title[0].classList.remove('hide_title');
            container_title[1].classList.add('hide_title');
            container_title[1].classList.remove('show_title');
            // Desc project
            desc_project[0].classList.add('hide_project--desc');
            desc_project[1].classList.remove('hide_project--desc');
            desc_project[2].classList.add('hide_project--desc');
            break;
        case 1:
            //show arrow left
            arrow_left.classList.remove('container__arrow--none');
            // Image project
            choose_img[0].classList.add('clip-rectangle--hide-left');
            choose_img[1].classList.remove('clip-rectangle--hide-right');
            // Title project
            container_title[0].classList.add('hide_title');
            container_title[0].classList.remove('show_title');
            container_title[1].classList.add('show_title');
            container_title[1].classList.remove('hide_title');
            container_title[2].classList.add('hide_title');
            container_title[2].classList.remove('show_title');
            // Desc project
            desc_project[0].classList.add('hide_project--desc');
            desc_project[1].classList.remove('hide_project--desc');
            desc_project[2].classList.add('hide_project--desc');
            break;
        case 2:
            // Image project
            choose_img[1].classList.add('clip-rectangle--hide-left');
            choose_img[2].classList.remove('clip-rectangle--hide-right');
            // Title project
            container_title[1].classList.add('hide_title');
            container_title[1].classList.remove('show_title');
            container_title[2].classList.add('show_title');
            container_title[2].classList.remove('hide_title');
            // Desc project
            desc_project[1].classList.add('hide_project--desc');
            desc_project[2].classList.remove('hide_project--desc');
            desc_project[3].classList.add('hide_project--desc');
            break;
        case 3:
            // Image project
            choose_img[2].classList.add('clip-rectangle--hide-left');
            choose_img[3].classList.remove('clip-rectangle--hide-right');
            // Title project
            container_title[2].classList.add('hide_title');
            container_title[2].classList.remove('show_title');
            container_title[3].classList.add('show_title');
            container_title[3].classList.remove('hide_title');
            // Desc project
            desc_project[2].classList.add('hide_project--desc');
            desc_project[3].classList.remove('hide_project--desc');
            desc_project[4].classList.add('hide_project--desc');
            break;
        case 4:
            //hide arrow right
            arrow_right.classList.add('container__arrow--none');
            // Image project
            choose_img[3].classList.add('clip-rectangle--hide-left');
            choose_img[4].classList.remove('clip-rectangle--hide-right');
            // Title project
            container_title[3].classList.add('hide_title');
            container_title[3].classList.remove('show_title');
            container_title[4].classList.add('show_title');
            container_title[4].classList.remove('hide_title');
            // Desc project
            desc_project[3].classList.add('hide_project--desc');
            desc_project[4].classList.remove('hide_project--desc');
            desc_project[0].classList.add('hide_project--desc');
            break;
    }
    event.stopImmediatePropagation();

    console.log(situation, "arrow +");

});

// menu_home.addEventListener('click', () => {
//   console.log(situation);
// });
//
// menu_about.addEventListener('click', () => {
//
// });

menu_home.addEventListener('click', () => {
    console.log(situation);


    if (situation === 1) {
        bgwhite_left.classList.remove('projects__project--left-bg--white--hide');
        bgwhite_right.classList.remove('projects__project--right-bg--white--hide');

        setTimeout(() => {
            container_svg.classList.remove('container--hide');
            project_choose.classList.remove('display--hide');
            container__arrows.classList.remove('display--hide');
            project_desc.classList.add('display--hide');
            container__button.classList.add('display--hide');

            arrows[0].classList.remove('container__arrow--hide-prev');
            arrows[0].classList.add('container__arrow--prev');
            arrows[1].classList.remove('container__arrow--hide-next');
            arrows[1].classList.add('container__arrow--next');
            setTimeout(() => {
                rect1.setAttribute("style", "transform: translateX(0px) translateY(0px);-webkit-transform: translateY(0px) translateX(0px);-moz-transform: translateY(0px) translateX(0px)");
                rect2.setAttribute("style", "transform: translateX(0px) translateY(0px);-webkit-transform: translateY(0px) translateX(0px);-moz-transform: translateY(0px) translateX(0px)");
                rect3.setAttribute("style", "transform: translateX(0px) translateY(0px);-webkit-transform: translateY(0px) translateX(0px);-moz-transform: translateY(0px) translateX(0px)");
                container_title[count].classList.add('show_title');
                container_title[count].classList.remove('hide_title');
                setTimeout(() => {
                    rect1.classList.remove('transition');
                    rect2.classList.remove('transition');
                    rect3.classList.remove('transition');
                }, 300);
            }, 200);
        }, 400);
        situation = 0;
        console.log("desc to choose");
    } else if (situation === 2) {
        about_bgwhite_left.classList.remove('about__left-bg--white--hide');
        about_bgwhite_right.classList.remove('about__right-bg--white--hide');
        about_bgblue_left.classList.remove('about__left-bg--blue--hide');
        setTimeout(() => {
            // display page about
            page_about.classList.add('display--hide');
            project_choose.classList.remove('display--hide');
            container__arrows.classList.remove('display--hide');
            container_svg.classList.remove('container--hide');
            arrows[0].classList.remove('container__arrow--hide-prev');
            arrows[0].classList.add('container__arrow--prev');
            arrows[1].classList.remove('container__arrow--hide-next');
            arrows[1].classList.add('container__arrow--next');
            rect1.setAttribute("style", "transform: translateX(0px) translateY(0px);-webkit-transform: translateY(0px) translateX(0px);-moz-transform: translateY(0px) translateX(0px)");
            rect2.setAttribute("style", "transform: translateX(0px) translateY(0px);-webkit-transform: translateY(0px) translateX(0px);-moz-transform: translateY(0px) translateX(0px)");
            rect3.setAttribute("style", "transform: translateX(300px) translateY(0px);-webkit-transform: translateY(0px) translateX(0px);-moz-transform: translateY(0px) translateX(0px)");
            // hide container title
            for (const title of container_title) {
                title.classList.remove('container__title--flex-hide');
            }
        }, 500);
        situation = 0;
        console.log("about to choose");
    } else if (situation === 3) {

      about_bgwhite_left.classList.remove('about__left-bg--white--hide');
      about_bgwhite_right.classList.remove('about__right-bg--white--hide');
      about_bgblue_left.classList.remove('about__left-bg--blue--hide');

      setTimeout(() => {

          // hide page about
          page_about.classList.remove('display--hide');
          container__button.classList.remove('display--hide');
          project_desc.classList.remove('display--hide');

          setTimeout( () => {
            bgwhite_left.classList.add('projects__project--left-bg--white--hide');
            bgwhite_right.classList.add('projects__project--right-bg--white--hide');
            bgblue_left.classList.add('projects__project--left-bg--blue--hide');
          },200);
      }, 500);

      situation = 1;
      console.log("about to desc");
    }


});

menu_about.addEventListener('click', () => {
    console.log(situation);

    // if click on about when on project choose
    if (situation === 0) {
        // disable event on scroll
        document.body.onmousemove = null

        rect1.classList.add('transition');
        rect2.classList.add('transition');
        rect3.classList.add('transition');

        rect1.setAttribute("style", "transform: translateX(0px) translateY(-210px);-webkit-transform: translateY(-210px) translateX(0px);-moz-transform: translateY(-210px) translateX(0px)");
        rect2.setAttribute("style", "transform: translateX(0px) translateY(-200px);-webkit-transform: translateY(0px) translateX(-200px);-moz-transform: translateY(0px) translateX(-200px)");
        rect3.setAttribute("style", "transform: translateX(300px) translateY(0px);-webkit-transform: translateY(0px) translateX(300px);-moz-transform: translateY(0px) translateX(300px)");
        arrows[0].classList.add('container__arrow--hide-prev');
        arrows[0].classList.remove('container__arrow--prev');
        arrows[1].classList.add('container__arrow--hide-next');
        arrows[1].classList.remove('container__arrow--next');
        // hide container title
        for (const title of container_title) {
            title.classList.add('container__title--flex-hide');
        }
        setTimeout(() => {
            container_svg.classList.add('container--hide');
            project_choose.classList.add('display--hide');
            container__arrows.classList.add('display--hide');
            // display page about
            page_about.classList.remove('display--hide');
            setTimeout(() => {
                about_bgwhite_left.classList.add('about__left-bg--white--hide');
                about_bgwhite_right.classList.add('about__right-bg--white--hide');
                about_bgblue_left.classList.add('about__left-bg--blue--hide');
                situation = 2;
            }, 300);
        }, 500);
        console.log("choose to about");
    } else if (situation === 1) {
        bgwhite_left.classList.remove('projects__project--left-bg--white--hide');
        bgwhite_right.classList.remove('projects__project--right-bg--white--hide');
        setTimeout(() => {
            container__arrows.classList.add('display--hide');
            container__button.classList.add('display--hide');
            project_desc.classList.add('display--hide');
            // display page about
            page_about.classList.remove('display--hide');
            setTimeout(() => {
                about_bgwhite_left.classList.add('about__left-bg--white--hide');
                about_bgwhite_right.classList.add('about__right-bg--white--hide');
                about_bgblue_left.classList.add('about__left-bg--blue--hide');
                situation = 3;
            }, 200);
        }, 500);
        console.log("desc to about");
        situation = 1;
    }
});
