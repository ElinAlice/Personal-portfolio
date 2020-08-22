$(document).ready(main);

let visible = false;

const main = () => {
    $('.clsMenu').click(() => {
        if(!estadoVisible()) {
            $('nav').animate({
                left:'0%'
            });
            visible = true;
        } else {
            $('nav').animate({
                left:'-80%'
            })
            visible = false;
        }
    });
};

const estadoVisible = () => {
    if(visible == false) {
        return false;
    } else {
        return true;
    }
};

