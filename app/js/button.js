
let button_prev = document.querySelector('.container__box--prev');
let button_next = document.querySelector('.container__box--next');
let bgwhite_left = document.querySelector('.projects__project--left-bg--white');
let bgblue_left = document.querySelector('.projects__project--left-bg--blue');
let bgwhite_right = document.querySelector('.projects__project--right-bg--white');
let container_title = document.querySelectorAll('.container__title--flex');
let container__arrows = document.querySelector('.container__arrows');
let container__button = document.querySelector('.container__button');

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
                // Title project
                container_title[0].classList.remove('hide_title');
                container_title[1].classList.add('hide_title');
                container_title[1].classList.remove('show_title');
                // Image choose project
                choose_img[0].classList.remove('clip-rectangle--hide-left');
                choose_img[1].classList.add('clip-rectangle--hide-right');
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
                // Title project
                container_title[0].classList.add('hide_title');
                container_title[0].classList.remove('show_title');
                container_title[1].classList.add('show_title');
                container_title[1].classList.remove('hide_title');
                container_title[2].classList.add('hide_title');
                container_title[2].classList.remove('show_title');
                //show arrow left
                arrow_left.classList.remove('container__arrow--none');
                // Image choose project
                choose_img[0].classList.add('clip-rectangle--hide-left');
                choose_img[1].classList.remove('clip-rectangle--hide-right');
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
                // Title project
                container_title[1].classList.add('hide_title');
                container_title[1].classList.remove('show_title');
                container_title[2].classList.add('show_title');
                container_title[2].classList.remove('hide_title');
                // Image choose project
                choose_img[1].classList.add('clip-rectangle--hide-left');
                choose_img[2].classList.remove('clip-rectangle--hide-right');
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
                // Title project
                container_title[2].classList.add('hide_title');
                container_title[2].classList.remove('show_title');
                container_title[3].classList.add('show_title');
                container_title[3].classList.remove('hide_title');
                // Image choose project
                choose_img[2].classList.add('clip-rectangle--hide-left');
                choose_img[3].classList.remove('clip-rectangle--hide-right');
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
                // Title project
                container_title[3].classList.add('hide_title');
                container_title[3].classList.remove('show_title');
                container_title[4].classList.add('show_title');
                container_title[4].classList.remove('hide_title');
                //hide arrow right
                arrow_right.classList.add('container__arrow--none');
                // Image choose project
                choose_img[3].classList.add('clip-rectangle--hide-left');
                choose_img[4].classList.remove('clip-rectangle--hide-right');
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
                // Title project
                container_title[0].classList.remove('hide_title');
                container_title[1].classList.add('hide_title');
                container_title[1].classList.remove('show_title');
                //hide button right
                button_prev.classList.add('container__box--none');
                //show arrow left
                arrow_left.classList.add('container__arrow--none');
                // Image choose project
                choose_img[0].classList.remove('clip-rectangle--hide-left');
                choose_img[1].classList.add('clip-rectangle--hide-right');
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
                // Title project
                container_title[1].classList.add('show_title');
                container_title[1].classList.remove('hide_title');
                container_title[2].classList.add('hide_title');
                container_title[2].classList.remove('show_title');
                // Image choose project
                choose_img[0].classList.add('clip-rectangle--hide-left');
                choose_img[1].classList.remove('clip-rectangle--hide-left');
                choose_img[2].classList.add('clip-rectangle--hide-right');
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
                // Title project
                container_title[2].classList.add('show_title');
                container_title[2].classList.remove('hide_title');
                container_title[3].classList.add('hide_title');
                container_title[3].classList.remove('show_title');
                // Image choose project
                choose_img[0].classList.add('clip-rectangle--hide-left');
                choose_img[2].classList.remove('clip-rectangle--hide-left');
                choose_img[3].classList.add('clip-rectangle--hide-right');
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
                // Title project
                container_title[3].classList.add('show_title');
                container_title[3].classList.remove('hide_title');
                container_title[4].classList.add('hide_title');
                container_title[4].classList.remove('show_title');
                //hide arrow right
                arrow_right.classList.remove('container__arrow--none');
                // Image choose project
                choose_img[1].classList.add('clip-rectangle--hide-left');
                choose_img[3].classList.remove('clip-rectangle--hide-left');
                choose_img[4].classList.add('clip-rectangle--hide-right');
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
                // Title project
                container_title[4].classList.remove('show_title');
                container_title[4].classList.add('hide_title');
                // Image choose project
                choose_img[2].classList.add('clip-rectangle--hide-left');
                choose_img[3].classList.remove('clip-rectangle--hide-left');
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
