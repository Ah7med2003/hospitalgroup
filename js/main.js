function changefunc() {
    let color1 = document.getElementById("index");


    color1.getAttribute('href') == 'css/HOME.css' ? color1.setAttribute('href', 'css/HOME_RED.css') : color1.setAttribute('href', 'css/HOME.css');

}



let inn = document.querySelector(".in");
let photo = document.getElementById("part_2_main");



let span = document.querySelector(".up");


span.onclick = function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth",


    })


};


var started = true;
var start = true;
window.onscroll = function () {
    if (this.scrollY > photo.offsetTop - 200) {
        if (started) {

            inn.classList.add("move");

        }

        started = false;
    }
    /*-------------*/

    if (this.scrollY >= 110) {
        span.classList.add("change");
    } else {
        span.classList.remove("change");
    }

    /*------------*/
    var box = document.getElementById("facts");
    var elem = document.querySelectorAll(".facts_box .number")
    if (this.scrollY >= box.offsetTop - 500) {

        if (start) {

            var upto = [0, 0, 0];
            var counts = setInterval(update, .1);
            function update() {
                if (upto[0] < 1000)
                    ++upto[0];
                if (upto[1] < 2500)
                    ++upto[1];
                ++upto[2];
                elem[0].innerHTML = upto[0];
                elem[1].innerHTML = upto[1];
                elem[2].innerHTML = upto[2];
                if (upto[2] == 3500)
                    clearInterval(counts);

            }

        }
        start = false;
    }


};

