/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================

import { tns } from "tiny-slider/src/tiny-slider"

var slider = tns({
    "container": ".portfolio-slider",
    "items": 3,
    "center": false,
    "loop": true,
    "swipeAngle": false,
    "speed": 400,
    "axis": "vertical",
    "controls": false,
    "nav": true,
    "mouseDrag": true
});
