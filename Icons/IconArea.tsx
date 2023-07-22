import { Icon } from "./Icon"

const svg = `
<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;} .st2{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:6,6;} .st3{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:4,4;} .st4{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;} .st5{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-dasharray:3.1081,3.1081;} .st6{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:4,3;} </style> <g> <g> <polyline class="st1" points="29,22 29,26 25,26 "></polyline> <line class="st2" x1="19" y1="26" x2="10" y2="26"></line> <polyline class="st1" points="7,26 3,26 3,22 "></polyline> <line class="st3" x1="3" y1="18" x2="3" y2="12"></line> <polyline class="st1" points="3,10 3,6 7,6 "></polyline> <line class="st2" x1="13" y1="6" x2="22" y2="6"></line> <polyline class="st1" points="25,6 29,6 29,10 "></polyline> <line class="st3" x1="29" y1="14" x2="29" y2="20"></line> </g> </g> </g></svg>
`

export const IconArea: Icon = ({ style }) => {

    return (
        <svg style={style} dangerouslySetInnerHTML={{ __html: svg }} />
    )
}