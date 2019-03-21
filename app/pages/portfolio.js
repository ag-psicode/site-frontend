/**
* Application entry point
*/

// Load application styles
import 'styles/index.scss';
import { tns } from "tiny-slider/src/tiny-slider"

// ================================
// START YOUR APP HERE
// ================================

const is_mobile = function() {
    let view_width = window.screen.width;
    if(view_width < 768) {
        return true;
    } else {
        return false;
    }
}

var portfolio_slider = {
    init: function() {
        let obj;

        if(is_mobile()) {
            obj = Object.assign(this.options.common, this.options.mobile);
        } else {
            obj = Object.assign(this.options.common, this.options.desktop);
            document.addEventListener('wheel', this.findScrollDirection);
        }

        this.slider = tns(obj);
    },
    slider: {},
    options: {
        common: {
            container: ".portfolio-slider",
            swipeAngle: false,
            speed: 400,
            nav: false,
            mouseDrag: true
        },
        mobile: {
            items: 2,
            center: true,
            loop: false,
            controls: false,
            axis: "horizontal"
        },
        desktop: {
            items: 3,
            center: false,
            loop: true,
            controls: true,
            axis: "vertical"
        }
    },
    findScrollDirection: function() {
        let delta;

        if (event.wheelDelta){
            delta = event.wheelDelta;
        }else{
            delta = -1 * event.deltaY;
        }

        if (delta < 0){
            portfolio_slider.slider.goTo('prev');
        }else if (delta > 0){
            portfolio_slider.slider.goTo('next');
        }
    }
}



// Load
portfolio_slider.init();
