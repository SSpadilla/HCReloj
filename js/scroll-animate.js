//Functions
const getInitialPosition = () => document.documentElement.scrollTop;
const getFinalPosition = (element) => Math.floor(
    element.getBoundingClientRect().top + getInitialPosition()
);

const animateScroll = (element, time) => {
    let initialPosition = getInitialPosition(),
        finalPosition = getFinalPosition(element),
        distance = finalPosition - initialPosition,
        velocity = distance / time;
    scrollMove(velocity, finalPosition);
}

const scrollMove = (velocity, finalPosition) => {
    let scrollInteval = setInterval(function () {
        document.documentElement.scrollTop += velocity
        if(velocity > 0){
            if (document.documentElement.scrollTop > finalPosition - (velocity / 2) || document.documentElement.scrollTop === document.documentElement.scrollHeight - document.documentElement.clientHeight) {
                clearInterval(scrollInteval);
                console.log("de arriba pa bajo");
            } 
        }else{
            if ( document.documentElement.scrollTop < finalPosition - (velocity / 2)) {
                clearInterval(scrollInteval);
                console.log("al reves");
            } 
        }
    }, 1);
}

const animateScrollEvent = (menuElement,time)=>{
    menuElement.addEventListener("click", (e)=>{
        e.preventDefault();
        let values = [...e.target.classList],
            element = null;
        switch(values[1]){
            case "menu-inicio":
                element = document.getElementById("header");
                break;
            case "menu-servicios":
                element = document.getElementById("servicios");
                break;
            case "menu-contacto":
                element = document.getElementById("contacto");
            break;
        }
        animateScroll(element,time);
    });
}

animateScrollEvent(document.getElementById("menu-container"),90);
