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

const throttle = function(fn, wait) {
    var time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

const debounce = (func, delay) => {
    let inDebounce
    return function() {
        const context = this
        const args = arguments
        clearTimeout(inDebounce)
        inDebounce = setTimeout(() =>
        func.apply(context, args)
        , delay)
    }
}

var portfolio_slider = {
    init: function() {
        let obj;

        if(is_mobile()) {
            obj = Object.assign(this.options.common, this.options.mobile);
        } else {
            obj = Object.assign(this.options.common, this.options.desktop);
            document.addEventListener('wheel', throttle(this.findScrollDirection, 1000));

            setTimeout(function(){
                portfolio_slider.listenersEventsAddClassOpaque();
                portfolio_slider.addVisible();
            }, 500)
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

        if (event.wheelDelta) {
            delta = event.wheelDelta;
        }else {
            delta = -1 * event.deltaY;
        }

        if (delta < 0) {
            portfolio_slider.slider.goTo('prev');
        }else if (delta > 0) {
            portfolio_slider.slider.goTo('next');
        }

        portfolio_slider.addVisible();
    },
    listenersEventsAddClassOpaque: function() {
        let listeners = {
            init: function() {
                this.add_event(document.querySelector(".tns-controls button[data-controls='prev']"));
                this.add_event(document.querySelector(".tns-controls button[data-controls='next']"));
                this.add_event(document.querySelector(".tns-slider"));
            },
            add_event: function(element) {
                element.addEventListener('click', function(){
                    portfolio_slider.addVisible();
                })
            }
        };

        listeners.init();
    },
    addVisible: function() {

        let clean = function() {
            let klass = document.querySelectorAll(".tns-slide-active.visible");

            if( klass.length > 0 ) {
                Object.keys(klass).map(function(objectKey, index) {
                    klass[objectKey].classList.remove("visible");
                });
            }
        }

        clean();

        setTimeout(function(){
            let item_active = document.querySelectorAll(".tns-slide-active");
            item_active[1].classList.add("visible");
        }, 200)
    }
}



// Load
portfolio_slider.init();
